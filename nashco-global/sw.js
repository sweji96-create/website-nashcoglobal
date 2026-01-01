
const CACHE_NAME = 'nashco-global-v1';
const urlsToCache = [
  "index.html", 
  "about.html", 
  "automotive.html", 
  "manufacturing.html", 
  "trading.html", 
  "zahy-alkhaleej.html",
  "contact.html", 
  "offline.html", 
  "manifest.json", 
  "Assets/css/styles.css", 
  "Assets/images/logo-nashco.png", 
  "Assets/images/automotive-industry-hero.jpeg", 
  "Assets/images/trading-shipping-container.jpeg", 
  "Assets/images/manufacturing-hero.jpg", 
  "Assets/images/contact-hero.jpg", 
  "Assets/images/home-page-dubai.jpeg", 
  "Assets/images/licensed-by.jpeg",
  "Assets/images/icon-192.png", 
  "Assets/images/icon-512.png"
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request).catch(() => caches.match('offline.html'));
    })
  );
});
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.map(cacheName => {
        if (!cacheWhitelist.includes(cacheName)) return caches.delete(cacheName);
      })
    ))
  );
});
