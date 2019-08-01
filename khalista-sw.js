const filesToCache = [
    'index.html',
    'manifest.json',
	'images/favicon.ico',
	'js/vendor/magnific-popup/magnific-popup.css',
	'js/vendor/mediaelement/css/mediaelementplayer.css',
	'css/fontello/css/fontello.css',
	'css/fontello/css/animation.css',
	'css/animation.css',
	'css/style.css',
	'css/shortcodes.css',
	'js/vendor/swiper/idangerous.swiper.css',
	'js/vendor/swiper/idangerous.swiper.scrollbar.css',
	'css/general.css',
    'css/responsive.css',
    'js/vendor/jquery-1.11.3.min.js',
    'js/idb.js',
    'js/main.js',
	'js/vendor/jquery-migrate.min.js',
	'js/vendor/__packed.js',
	'js/custom/_main.js',
	'js/custom/shortcodes_init.js',
	'js/custom/_utils.js',
	'js/custom/_front.js'
  ];
const staticCacheName = 'pages-cache-v1';
self.addEventListener('install', event => {
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
      caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
      })
    );
    // self.skipWaiting();
/*dapat dipanggil kapan saja selama eksekusi pekerja layanan, 
itu hanya akan berpengaruh jika ada pekerja layanan yang baru diinstal yang mungkin tetap dalam kondisi menunggu.*/
  });
  
self.addEventListener('activate', function(event) {
console.log('Service worker activating...');
});

// I'm a new service worker
self.addEventListener('fetch', event => {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request)
  
        // TODO 4 - Add fetched files to the cache
  
      }).catch(error => {
  
        // TODO 6 - Respond with custom offline page
  
      })
    );
  });
  
//fetch berguna untuk mengambil data dari server
