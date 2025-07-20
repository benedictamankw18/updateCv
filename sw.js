// Service Worker for Benedict's Portfolio
// Version 1.0.0

const CACHE_NAME = 'benedict-portfolio-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/index-enhanced.html',
  '/assets/css/modern-styles.css',
  '/assets/css/enhanced-styles.css',
  '/assets/js/enhanced-app.js',
  '/style.css',
  '/welcome.css',
  '/script.js',
  '/welcome.js',
  '/logo.ico',
  '/IMG_9346 (2).jpg',
  '/font-awesome-4.7.0/css/font-awesome.min.css',
  // Add other critical assets
];

// Network-first resources (always try network first)
const NETWORK_FIRST = [
  '/api/',
  '/contact.php',
  'https://api2.sololearn.com/',
  'https://fonts.googleapis.com/',
  'https://fonts.gstatic.com/'
];

// Cache-first resources
const CACHE_FIRST = [
  '/assets/',
  '/font-awesome-4.7.0/',
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.webp',
  '.svg',
  '.css',
  '.js'
];

// Install Event - Cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Static assets cached successfully');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Service Worker: Failed to cache static assets', error);
      })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              return cacheName !== STATIC_CACHE && 
                     cacheName !== DYNAMIC_CACHE &&
                     cacheName !== CACHE_NAME;
            })
            .map(cacheName => {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated successfully');
        return self.clients.claim();
      })
  );
});

// Fetch Event - Handle requests with different strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http requests
  if (!request.url.startsWith('http')) {
    return;
  }
  
  event.respondWith(handleRequest(request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  
  try {
    // Network-first strategy for API calls and dynamic content
    if (shouldUseNetworkFirst(request.url)) {
      return await networkFirst(request);
    }
    
    // Cache-first strategy for static assets
    if (shouldUseCacheFirst(request.url)) {
      return await cacheFirst(request);
    }
    
    // Stale-while-revalidate for HTML pages
    if (request.destination === 'document') {
      return await staleWhileRevalidate(request);
    }
    
    // Default to network-first
    return await networkFirst(request);
    
  } catch (error) {
    console.error('Service Worker: Request failed', error);
    
    // Return offline page for navigation requests
    if (request.destination === 'document') {
      return await getOfflinePage();
    }
    
    // Return cached version if available
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return network error
    return new Response('Network error', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Network-first strategy
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      // Cache successful responses
      const cache = await caches.open(DYNAMIC_CACHE);
      await cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    // Fall back to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Cache-first strategy
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    // Update cache in background
    updateCacheInBackground(request);
    return cachedResponse;
  }
  
  // If not in cache, fetch from network and cache
  const networkResponse = await fetch(request);
  
  if (networkResponse.ok) {
    const cache = await caches.open(DYNAMIC_CACHE);
    await cache.put(request, networkResponse.clone());
  }
  
  return networkResponse;
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request) {
  const cachedResponse = await caches.match(request);
  
  // Always try to update from network
  const networkResponsePromise = fetch(request).then(async response => {
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      await cache.put(request, response.clone());
    }
    return response;
  });
  
  // Return cached version immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Otherwise wait for network
  return await networkResponsePromise;
}

// Update cache in background
async function updateCacheInBackground(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      await cache.put(request, response);
    }
  } catch (error) {
    console.log('Background cache update failed', error);
  }
}

// Get offline page
async function getOfflinePage() {
  const cache = await caches.open(STATIC_CACHE);
  const offlinePage = await cache.match('/offline.html');
  
  if (offlinePage) {
    return offlinePage;
  }
  
  // Return a simple offline message
  return new Response(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Offline - Benedict's Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px;
          color: #333;
        }
        .offline-container {
          max-width: 400px;
          margin: 0 auto;
        }
        .offline-icon {
          font-size: 48px;
          margin-bottom: 20px;
        }
        h1 { color: #667eea; }
        .retry-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="offline-container">
        <div class="offline-icon">📱</div>
        <h1>You're Offline</h1>
        <p>It looks like you're not connected to the internet. Please check your connection and try again.</p>
        <button class="retry-btn" onclick="window.location.reload()">
          Try Again
        </button>
      </div>
    </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' }
  });
}

// Helper functions
function shouldUseNetworkFirst(url) {
  return NETWORK_FIRST.some(pattern => url.includes(pattern));
}

function shouldUseCacheFirst(url) {
  return CACHE_FIRST.some(pattern => url.includes(pattern));
}

// Background Sync for offline form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
});

async function syncContactForm() {
  try {
    // Get pending form submissions from IndexedDB
    const submissions = await getPendingSubmissions();
    
    for (const submission of submissions) {
      try {
        const response = await fetch('/contact.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submission.data)
        });
        
        if (response.ok) {
          await removePendingSubmission(submission.id);
          console.log('Form submission synced successfully');
        }
      } catch (error) {
        console.error('Failed to sync form submission', error);
      }
    }
  } catch (error) {
    console.error('Background sync failed', error);
  }
}

// Push notifications
self.addEventListener('push', event => {
  if (!event.data) return;
  
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: '/logo.ico',
    badge: '/logo.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: data.primaryKey
    },
    actions: [
      {
        action: 'explore',
        title: 'View Portfolio',
        icon: '/assets/icons/view.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/assets/icons/close.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Message handling from main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      cacheUrls(event.data.urls)
    );
  }
});

async function cacheUrls(urls) {
  const cache = await caches.open(DYNAMIC_CACHE);
  return Promise.all(
    urls.map(url => {
      return fetch(url).then(response => {
        if (response.ok) {
          return cache.put(url, response);
        }
      }).catch(error => {
        console.log('Failed to cache URL:', url, error);
      });
    })
  );
}

// IndexedDB helpers for offline form submissions
async function getPendingSubmissions() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('PortfolioOfflineDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['submissions'], 'readonly');
      const store = transaction.objectStore('submissions');
      const getAllRequest = store.getAll();
      
      getAllRequest.onsuccess = () => resolve(getAllRequest.result);
      getAllRequest.onerror = () => reject(getAllRequest.error);
    };
    
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('submissions')) {
        db.createObjectStore('submissions', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

async function removePendingSubmission(id) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('PortfolioOfflineDB', 1);
    
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['submissions'], 'readwrite');
      const store = transaction.objectStore('submissions');
      const deleteRequest = store.delete(id);
      
      deleteRequest.onsuccess = () => resolve();
      deleteRequest.onerror = () => reject(deleteRequest.error);
    };
  });
}

// Performance monitoring
self.addEventListener('fetch', event => {
  // Track performance metrics
  const startTime = performance.now();
  
  event.respondWith(
    handleRequest(event.request).then(response => {
      const endTime = performance.now();
      const duration = endTime - startTime;
      
      // Log slow requests
      if (duration > 1000) {
        console.warn(`Slow request detected: ${event.request.url} took ${duration}ms`);
      }
      
      return response;
    })
  );
});

console.log('Service Worker: Loaded successfully');
