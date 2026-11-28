// Makes the app work offline. The browser keeps this script and runs it for every request:
// - the page itself: the network first (so updates show up), the saved copy when offline;
// - built files in assets/ (lectures, code, styles, fonts): their names change whenever their
//   contents do, so a saved copy is always right and is used without asking the network;
// - everything else (icons, the manifest): the saved copy at once, refreshed in the background.

const CACHE = "lecture-tutor-v1";
// Match saved files by address alone. Some servers add "Vary: Origin", and fonts are requested
// with an Origin header while the Save button's copies weren't, so a strict match would miss them.
const MATCH = { ignoreVary: true };
const SHELL = ["./", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", "./apple-touch-icon.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) => Promise.all(names.filter((name) => name !== CACHE).map((name) => caches.delete(name))))
      .then(() => self.clients.claim()),
  );
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE);
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put("./", response.clone());
    }
    return response;
  } catch {
    return (await cache.match("./", MATCH)) ?? Response.error();
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const saved = await cache.match(request, MATCH);
  if (saved) {
    return saved;
  }
  const response = await fetch(request);
  if (response.ok) {
    cache.put(request, response.clone());
  }
  return response;
}

async function savedThenRefresh(request) {
  const cache = await caches.open(CACHE);
  const saved = await cache.match(request, MATCH);
  const fresh = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => saved ?? Response.error());
  return saved ?? fresh;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }
  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
  } else if (url.pathname.includes("/assets/")) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(savedThenRefresh(request));
  }
});
