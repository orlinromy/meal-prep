console.info("service worker");

// applications assets
const toCache = [
  "/dov-bear.gif",
  "/offline.html",
  "/polar-bear.png",
  "/styles.css",
  "/manifest.json",
  "/sw.js",
  "/reg_sw.js",
];

const assetCache = "asset";
const contentCache = "content";

// cache application assets on the browser
// service worker will install again after it's unregistered
self.addEventListener("install", (event) => {
  console.info("Installing service worker");
  // Install the assets, wait until the promise resolves
  event.waitUntil(
    caches.open(assetCache).then((cache) => {
      console.log("cache", cache);
      return cache.addAll(toCache);
    }) //this is asset cache
  );
});

// intercept fetch event
// whenever browser make a fetch request, service worker will intercept and forward the request to application. If it can't forward the request, respond with the offline page
// or in short, it works like a proxy
self.addEventListener("fetch", (event) => {
  console.info("Intercepting fetch...");
  console.log(event);

  const req = event.request;

  // check if the cache is part of the application asset
  // if yes, then load from asset, don't go to the network
  //   if (toCache.find((v) => req.url.endsWith(v))) {
  //     event.respondWith(
  //       caches.open(assetCache).then((cache) => cache.match(req))
  //     );
  //     return;
  //   }

  event.respondWith(
    // the response can be from the network or we can artificially change it
    fetch(req)
      .then((res) => {
        // when the fetch is successful,
        const copy = res.clone();

        //cache the response
        event.waitUntil(
          caches.open(contentCache).then((cache) => cache.put(req, copy))
        );
        // note: there might be an error in the console
        // Uncaught (in promise) TypeError: Failed to execute 'put' on 'Cache': Request scheme 'chrome-extension' is unsupported
        // can ignore this error
        return res;
      })
      .catch((err) => {
        // network issue
        console.error(err);
        // case 1: if we're dealing with the html error
        if (req.headers.get("Accept").includes("text/html")) {
          /// attempt to match the content with the request
          return caches
            .open(contentCache)
            .then((cache) => cache.match(req))
            .then((res) => {
              // found the response to the request
              if (!!res) return res;
              // otherwise, load the offline.html
              return caches
                .open(assetCache)
                .then((cache) => cache.match("./offline.html"));
            });
          // .then((cache) => cache.match("/offline.html"));
        }
        return caches.match(req);
      })
  );
});
