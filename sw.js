const CACHE_NAME = 'lingotube-v3';
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
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
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
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Ignorar peticiones que no sean GET
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((cachedResponse) => {
      
      const fetchPromise = fetch(e.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && (networkResponse.type === 'basic' || networkResponse.type === 'cors')) {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(e.request, responseToCache);
            });
        }
        return networkResponse;
      }).catch(() => {
        // Ignorar errores de red
      });

      // Si tenemos respuesta en caché, la devolvemos inmediatamente
      if (cachedResponse) {
        return cachedResponse;
      }

      // Si no está en caché y es una petición de navegación (HTML), forzamos a devolver index.html
      if (e.request.mode === 'navigate') {
        return caches.match('./index.html', { ignoreSearch: true })
          .then(fallback => fallback || fetchPromise);
      }

      // Si no está en caché y no es navegación, esperamos la red
      return fetchPromise.then(res => {
          if(!res) {
              return new Response('', { status: 408, statusText: 'Request Timeout' });
          }
          return res;
      });
    })
  );
});
