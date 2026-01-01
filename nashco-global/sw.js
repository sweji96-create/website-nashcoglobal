// Cache version - increment when updating assets
const CACHE_NAME = 'nashco-global-v2';

// Core files to cache for offline functionality
const urlsToCache = [
  'index.html',
  'about.html',
  'automotive.html',
  'manufacturing.html',
  'trading.html',
  'contact.html',
  'zahy-alkhaleej.html',
  'offline.html',
  'manifest.json',
  'Assets/css/styles.css',
  'Assets/images/logo-nashco.png',
  'Assets/images/automotive-industry-hero.jpeg',
  'Assets/images/manufacturing-hero.jpg',
  'Assets/images/trading-hero.jpeg',
  'Assets/images/contact-hero.jpg',
  'Assets/images/home-page-dubai.jpeg',
  'Assets/images/licensed-by.jpeg'
];

// Install event - cache core files
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

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        }).catch(() => {
          // Fallback to offline page
          return caches.match('offline.html');
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
