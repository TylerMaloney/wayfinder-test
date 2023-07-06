// self.addEventListener('install', function(event) {
//   event.waitUntil(
//     caches.open('tileCache').then(function(cache) {
//       var rootUrl = '/mapTiles/';
//       var tileUrls = [];

//       var subfolders = ['6', '7', '8', '9'];

//       subfolders.forEach(function(subfolder) {
//         var subfolderUrl = rootUrl + subfolder + '/';
//         tileUrls.push(subfolderUrl + '**/*.png'); // Add the subfolder URL and file pattern
//       });

//       return cache.addAll(tileUrls);
//     })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       // If the tile is present in the precache, serve it from the cache
//       if (response) {
//         return response;
//       }

//       // If the tile is not in the precache, fetch it from the network
//       return fetch(event.request);
//     })
//   );
// });
