var cacheName = "carrito-v3";
var filesToCache = [
    "/",
    "/index.html",
    "/gallery.html",
    "/iniciar_sesion.html",
    "/scripts/agregarlista.js",
    "/scripts/api.js",
    "/scripts/app.js",
    "/scripts/facebook.js",
    "/scripts/index.js", 
    "/scripts/jQuery.js",
    "/styles/main.css",
    "/styles/menu.css",
    "/styles/enano.css",
    "/styles/celu.css",
    "/styles/gallery.css",
    "/styles/login.css",
    "/images/icon.png",
    "/images/atras.jpg"
];

self.addEventListener( 'install', function( e ) {
    console.log( '[ServiceWorker] Install' );
    e.waitUntil(
        caches.open( cacheName ).then( function( cache ) {
            console.log( '[ServiceWorker] Caching app shell' );
            return cache.addAll( filesToCache );
        } )
    );
} );

self.addEventListener( 'activate', function( e ) {
    console.log( '[ServiceWorker] Activate' );
    e.waitUntil(
        caches.keys( ).then( function( keyList ) {
            return Promise.all( keyList.map( function( key ) {
                if ( key != cacheName ) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete( key );
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener( 'fetch', function( e ) {
    console.log( '[ServiceWorker] Fetch', e.request.url );
    e.respondWith(
        caches.match( e.request ).then( function( response ) {
            return response || fetch( e.request );
        } )
    );
} );