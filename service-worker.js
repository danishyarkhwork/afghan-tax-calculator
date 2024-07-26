self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("static-cache-v1").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./styles.css",
        "./assets/js/converter.js",
        "./assets/media/android-chrome-192x192.png",
        "./assets/media/android-chrome-512x512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
