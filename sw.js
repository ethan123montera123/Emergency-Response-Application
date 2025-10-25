self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("rescue-cache").then((cache) =>
            cache.addAll([
                "/",
                "/index.html",
                "/app.js",
                "/firebase.js",
                "/manifest.json",
                "/assets/icon-192x192.png",
                "/assets/icon-512x512.png",
            ])
        )
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request))
    );
});
