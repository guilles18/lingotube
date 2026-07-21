const CACHE_NAME = 'lingotube-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone@7.23.6/babel.min.js',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Instalación a prueba de fallos: añadir uno por uno
      for (let asset of ASSETS) {
        try {
          await cache.add(asset);
        } catch (err) {
          console.warn('Fallo al cachear asset en install:', asset, err);
        }
      }
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
          // Si está en cache, actualizar en background para futuras visitas
          e.waitUntil(
              fetch(e.request).then((res) => {
                  if (res && res.status === 200) {
                      caches.open(CACHE_NAME).then(cache => cache.put(e.request, res.clone()));
                  }
              }).catch(() => {})
          );
          return cachedResponse;
      }

      // Si NO está en cache, ir a la red
      return fetch(e.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
              const resClone = networkResponse.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(e.request, resClone));
          }
          return networkResponse;
      }).catch(async () => {
          // Si falla la red, intentar usar el index.html como fallback para navegación
          if (e.request.mode === 'navigate') {
              const cache = await caches.open(CACHE_NAME);
              const fallback = await cache.match('./index.html', { ignoreSearch: true }) 
                               || await cache.match('./', { ignoreSearch: true });
              if (fallback) return fallback;
              
              // Fallback extremo
              return new Response(
                  '<html><body style="font-family:sans-serif;padding:2rem;text-align:center;">' +
                  '<h1>Modo Offline</h1>' +
                  '<p>Por favor conéctate a WiFi un momento para cargar la app por primera vez y poder usarla sin internet.</p>' +
                  '</body></html>',
                  { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
              );
          }
          return new Response('', { status: 408, statusText: 'Offline' });
      });
    })
  );
});
