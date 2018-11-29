var cacheName = "misPerris-v6";
var filesToCache = [
    "/",
    "/index.html",
    "/gallery.html",
    "/iniciar_sesion.html",
    "/scripts/app.js",
    "/scripts/api.js",
    "/styles/main.css",
    "/styles/menu.css",
    "/styles/enano.css",
    "/styles/celu.css",
    "/styles/gallery.css",
    "/styles/login.css",
    "/images/rescate1.jpeg",
    "/images/rescate2.jpg",
    "/images/rescate3.jpg",
    "/images/perrorad.jpeg",
    "/images/comida.jpg",
    "/images/boxdog1.jpg",
    "/images/boxdog2.jpg",
    "/images/boxdog3.jpg",
    "/images/boxdog4.jpg",
    "/images/boxdog5.jpg",
    "/images/boxdog6.jpg",
    "/images/boxdog7.jpg",
    "/images/boxdog8.jpg",
    "/images/boxdog9.jpg",
    "/images/boxdog10.jpg",
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
