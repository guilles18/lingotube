const CACHE_NAME = 'lingotube-v9';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone@7.23.6/babel.min.js',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore-compat.js'
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

  const url = new URL(e.request.url);

  // Solo interceptar peticiones http/https
  if (!url.protocol.startsWith('http')) return;

  // NUNCA interceptar llamadas a APIs de Firebase, Auth, Firestore o Google
  const hostname = url.hostname;
  if (
    hostname.includes('firestore.googleapis.com') ||
    hostname.includes('identitytoolkit') ||
    hostname.includes('securetoken') ||
    hostname.includes('accounts.google.com') ||
    hostname.includes('apis.google.com') ||
    hostname.includes('firebaseio.com') ||
    hostname.includes('firebaseapp.com')
  ) {
    return;
  }

  // ESTRATEGIA NETWORK-FIRST PARA NAVEGACIÓN (HTML):
  // Asegura que si hay internet, el PC y celular siempre descarguen el index.html más reciente
  // y solo use la caché si el usuario está completamente desconectado (modo offline).
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const resClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resClone));
          }
          return networkResponse;
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME);
          const fallback = await cache.match('./index.html', { ignoreSearch: true })
                         || await cache.match('./', { ignoreSearch: true });
          if (fallback) return fallback;

          return new Response(
            '<html><body style="font-family:sans-serif;padding:2rem;text-align:center;">' +
            '<h1>Modo Offline</h1>' +
            '<p>Por favor conéctate a internet para sincronizar tus clases con la nube.</p>' +
            '</body></html>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        })
    );
    return;
  }

  // Para recursos estáticos (scripts, librerías, css): Cache-first con actualización en background
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        e.waitUntil(
          fetch(e.request).then((res) => {
            if (res && res.status === 200 && res.type !== 'opaque') {
              caches.open(CACHE_NAME).then(cache => cache.put(e.request, res.clone()));
            }
          }).catch(() => {})
        );
        return cachedResponse;
      }

      return fetch(e.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type !== 'opaque') {
          const resClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, resClone));
        }
        return networkResponse;
      }).catch(async () => {
        return new Response('', { status: 408, statusText: 'Offline' });
      });
    })
  );
});
