
const CACHE_VERSION = '2.0.0';
const CACHE_NAME = `nashco-global-v${CACHE_VERSION}`;
const urlsToCache = [
  "./",
  "./index.html",
  "./about.html",
  "./automotive.html",
  "./manufacturing.html",
  "./trading.html",
  "./contact.html",
  "./zahy-alkhaleej.html",
  "./offline.html",
  "./manifest.json",
  "./Assets/css/styles.css",
  "./Assets/images/logo-nashco.png",
  "./Assets/images/icon-192.png",
  "./Assets/images/icon-512.png",
  "./Assets/images/home-page-dubai.jpeg",
  "./Assets/images/contact-hero.jpg",
  "./Assets/images/licensed-by.jpeg"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            return response;
          })
          .catch(() => caches.match('./offline.html'));
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (!cacheWhitelist.includes(cacheName)) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});
