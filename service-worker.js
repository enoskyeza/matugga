const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/css/style.css',
  '/js/main.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request to ensure it can be used to respond to the fetch request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest)
          .then(function(response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response to ensure it can be used to respond to the fetch request
            const responseToCache = response.clone();

            const cacheControlHeader = new Headers();
            cacheControlHeader.append('Cache-Control', 'max-age=3600,public');

            const newResponse = new Response(responseToCache.body, {
              status: response.status,
              statusText: response.statusText,
              headers: cacheControlHeader
            });

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, newResponse);
              });

            return response;
          });
      })
  );
});
