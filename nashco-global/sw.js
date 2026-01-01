
const CACHE_NAME = 'nashco-global-v2';
const urlsToCache = [
  "index.html",
  "about.html",
  "zahy-alkhaleej.html",
  "automotive.html",
  "manufacturing.html",
  "trading.html",
  "contact.html",
  "offline.html",
  "manifest.json",
  "Assets/css/styles.css",
  "Assets/js/main.js",
  "Assets/images/logo-nashco.png",
  "Assets/images/icon-192.png",
  "Assets/images/icon-512.png",
  "Assets/images/home-page-dubai.jpeg",
  "Assets/images/manufacturing-factory-inside-page.jpg",
  "Assets/images/contact-hero.jpg"
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache).catch(err => {
        console.error('Cache addAll failed:', err);
        // Continue installation even if some resources fail
        return Promise.resolve();
      });
    })
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});
self.addEventListener('fetch', event => {
  // Skip cross-origin requests and chrome extension requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      // Return cached version or fetch from network
      if (response) {
        return response;
      }
      return fetch(event.request).then(fetchResponse => {
        // Cache successful GET requests
        if (fetchResponse && fetchResponse.status === 200 && event.request.method === 'GET') {
          const responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return fetchResponse;
      }).catch(() => {
        // Return offline page for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('offline.html');
        }
        return new Response('Offline - no cached version available', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => {
        if (!cacheWhitelist.includes(cacheName)) {
          console.log('Deleting old cache:', cacheName);
          return caches.delete(cacheName);
        }
      })
    )).then(() => {
      // Take control of all pages immediately
      return self.clients.claim();
    })
  );
});
