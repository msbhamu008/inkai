const CACHE_NAME = 'ink-cache-v1';
const STATIC_RESOURCES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/favicon.svg',
  '/images/ink_logo.png',
  '/images/ink_logo_white.png'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_RESOURCES);
      })
  );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
});

// Fetch Strategy: Cache First, Network Fallback
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Skip analytics and other non-essential requests
  if (event.request.url.includes('google-analytics.com') || 
      event.request.url.includes('googletagmanager.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached response if found
        if (response) {
          // Fetch and cache update in background
          fetch(event.request)
            .then((freshResponse) => {
              if (freshResponse) {
                caches.open(CACHE_NAME)
                  .then((cache) => cache.put(event.request, freshResponse));
              }
            });
          return response;
        }

        // If not in cache, fetch from network
        return fetch(event.request)
          .then((response) => {
            // Cache the fetched response
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseClone);
                });
            }
            return response;
          });
      })
      .catch(() => {
        // Return offline fallback for HTML requests
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('/offline.html');
        }
      })
  );
});
