/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","0bbbf394f7fcd492a1741b232cce2298"],["card.html","291e43247c59054b0969eba31e9fb5af"],["coffee.html","2b24d3b8c1721fa8ebb16c89cbae87ef"],["css/global.css","d722664089e37c4bdde29e9308fa6529"],["css/main.css","f4e1f47f0593010f1454552ede40247f"],["css/responsive.css","1f72202205c70a132543cc6d0eed5576"],["css/sub.css","0ca7e56bf7a328808f00d8a860b9c22c"],["font/Pretendard-Bold.woff","d93573b4d0c2d6b0cd2df2eb87a1d677"],["font/Pretendard-Bold.woff2","c45234800c42ff624adc8941a1fa9e8f"],["font/Pretendard-ExtraBold.woff","89373147524ab520e26ea0e58bb632c5"],["font/Pretendard-ExtraBold.woff2","848bff7bea24a318a054979fd53fcd71"],["font/Pretendard-Light.woff","bfff3a54757b20bec529ad0c11de7b7e"],["font/Pretendard-Light.woff2","8f686c143e28df9c200c189c88f90a40"],["font/Pretendard-Medium.woff","7bab4a8a2580411ea263b78fb93436fa"],["font/Pretendard-Medium.woff2","146472533da4d370f600334864179b5b"],["font/Pretendard-Regular.woff","db095fbdc6e9c9a1cea9577fcb8e0f7a"],["font/Pretendard-Regular.woff2","bac296f1fd0973251e94406b8d328847"],["font/Pretendard-SemiBold.woff","461720124becc9594739cd6750835c38"],["font/Pretendard-SemiBold.woff2","b1e912aa560e4d0e6537e42babb7f112"],["font/Santana-Black.woff","44b14807f5c6a94321fd8010da785509"],["font/Santana-Black.woff2","b94b37276eb72ee1c8039ceb7b15e69d"],["icon/icon-large.png","8701957db43fc8da0f5e2b9750b9ed51"],["icon/icon-regular.png","f9bce1f5b833d9a7116878ecf37b1ba0"],["icon/icon-small.png","3ffbafd43d9eacdada7adac34f41a16a"],["icon/icon.png","83b9ad65076a92bdf6f01c1a5e3e7ae9"],["icon/screenshot1.png","45cb3a24b65d2dd3da1e459f0e32c36b"],["icon/screenshot2.png","21e822d1fceee7af508f02cb7b84c14b"],["icon/screenshot3.png","9a576056f5681a569883bab74584b941"],["icon/screenshot4.png","7d9cb6d16c249129fa1b44f45eae98ab"],["icon/screenshot5.png","346cc38d34d7e010c1b39252bc4c8b98"],["icon/screenshot6.png","3d45bf44e41967132be7ede095c8d7b7"],["img/background.png","d93620cd1542556f4831c87e5c25346a"],["img/card/card.webp","e0bd99cd10c63fa34c414e58f78cf87b"],["img/card/card1.png","e1f80c5325553cff144350d1ecc913a1"],["img/card/card2.png","14686f66120559b2e5df8f6034ccdd8a"],["img/card/card3.png","6800f5aaaccb41d9c8dcbbd4a75652b3"],["img/card/card4.png","fb6cea611246db650f1589a7033eb3a0"],["img/card/card5.png","8bf75b644528f5f090818499355c7ac3"],["img/card/card6.png","83e3ca397640a243d757173e0ae15c68"],["img/card/special1.png","1f21fd97f5934b593ce7fdeb828d325b"],["img/card/special2.png","b7953ef79471b3da80f1ed25e13c3434"],["img/card/special3.png","8e341534dbbdf5064aeb345af355bb91"],["img/card/special4.png","3197b695c49aae12eca74f7c8597bcb3"],["img/card/special5.png","be3f7ecffa73e2879ca50189dca2474b"],["img/card/wave_pattern.png","210331d9d1eec3db6634e792961932fb"],["img/coffee/blend_bg.jpg","65927a1c77b60fc8df84b9a13cd5536c"],["img/coffee/espresso_bg.jpg","91d4f05433a63f235f8da2faea5ca06a"],["img/coffee/esspresso/americano.png","d68505a75e1d4c44c13533524389e198"],["img/coffee/esspresso/cappuccino.png","8d9f1320c27c81fdf949a4aeeaaf884f"],["img/coffee/esspresso/color_espresso.png","042c80fca2d805b7145ba34272827d5b"],["img/coffee/esspresso/color_milkfoam.png","2826b3ea772f9ff3d3f052d095507a68"],["img/coffee/esspresso/color_steamdmilk.png","a188a2b1704ffe4b2dc3c5ed0af3a923"],["img/coffee/esspresso/color_water.png","1e863b76ba383fc548434c9f371bc263"],["img/coffee/esspresso/doppio.png","8523d2106e95dff916c260bd3859bc8b"],["img/coffee/esspresso/latte.png","a222198beda708c3c51087cde9a9c5b1"],["img/coffee/reserve/bean.png","40118abfabe045a34726ad0074024b7e"],["img/coffee/reserve/bean1.jpg","41eb7274af3e777df17b8a95f2268bd9"],["img/coffee/reserve/bean2.jpg","04b1a769febdc26629ddf720f92d662b"],["img/coffee/reserve/bean3.jpg","18a85e39f476bf7524f4d9a4b23b7b4e"],["img/coffee/reserve/bean4.jpg","0784571bb3200c11f71cf6902308f089"],["img/coffee/reserve/icon_new.png","386ba29e2b887b01a7a51c1a913b3666"],["img/coffee/reserve/map_icon.png","68619b40290f9970e2c999f96edcf597"],["img/coffee/reserve/map_marker.png","7dbb1a8f6ec29b8a26ed58322c3bd0a7"],["img/coffee/reserve/reserve_bg.jpg","9667014763c9baf8d3984a8cf7b53d93"],["img/coffee/reserve/reserve_blackeagle.png","6aa030fc7ce982e82f5010a116fef810"],["img/coffee/reserve/reserve_clover.png","f37e8b3f073268c500ecc8c8f03f1a1a"],["img/coffee/reserve/reserve_coldbrew.png","545e29d5621482b68b294f2b4e308273"],["img/coffee/reserve/reserve_icon.png","46eca4b1a6a21792259f613cea9968ef"],["img/coffee/reserve/reserve_icon_brown.png","4805a9288f2ddb5cee92f70eebb6cdd9"],["img/coffee/reserve/reserve_pourover.png","43ccd0a419f3409ed5159bb1078054fa"],["img/coffee/reserve/store_icon1.png","4e520a07ab4e6ce6f5ca85d3c295b577"],["img/coffee/reserve/store_icon2.png","3c591f11eb5f2005232f7a21fe10674d"],["img/coffee/reserve/store_icon3.png","f2011bff0d7e88000dfcfc54f8b85b0f"],["img/coffee/reserve/store_icon4.png","7acc1af0efcd2f6ee7ad3cc971dfe8f4"],["img/coffee/reserve/store_icon5.png","3ab2848a488374da052197dcbd45f112"],["img/coffee/reserve/store_title.jpg","cabe4ec9f6aad01359e5664bc52437b6"],["img/coffee/reserve/storemap.png","91ab969e12e9c19f040179257b6b85f6"],["img/coffee/reserve/tel_icon.png","467be564afe627c77057c7592eb262d6"],["img/coffee/reserve/title.jpg","587499fd5ac86e7eafa043ee44284239"],["img/cup.png","91b8365ef2303fe9609a0139fa1cb67a"],["img/favicon.ico","de14cda4c0b9306097d9caedf484a4e1"],["img/footer/facebook.png","b5a4252fd2b7bb4f17d4db4f9d9ec6c9"],["img/footer/instagram.png","292042aba167eb59f7bf9262897470e2"],["img/footer/twitter.png","8a2f765cd383de44a64bd02d075c1ae6"],["img/footer/youtube.png","931755b6c46d928abf1c522dfc55d677"],["img/home/beverage.png","8ad0355ff86f7290323bf8c9b59f3183"],["img/home/beverage2.png","84ed4d148a23c9fbf20556a4ec511cf5"],["img/home/card.png","a5f26de72351d3d499efd15fdbeec113"],["img/home/card2.png","01056823237c13b3136539f13573bd2a"],["img/home/dessert.png","a96fd29de57b6e45adf58f051ae59170"],["img/home/dessert2.png","ebc419e02ac056a08de345b8ef8576f5"],["img/home/menu/beverage_icon.png","df696e03fc379f641aa8e74fb66bdc6e"],["img/home/menu/dessert_icon.png","433858789964d10ede82c9fbcbba9684"],["img/home/menu/icon__dessert.png","ef1e4d2750c29746cf7627e765e270e3"],["img/home/menu/icon__promotion.png","6d274aa3df17e5cc35d1cb9b0a443b04"],["img/home/menu/icon_beverage.png","e7c423c9e231cbb4aa3e0ba47a5a4ab7"],["img/home/menu/icon_card.png","691fba9f6d107bd31d14425b436516fa"],["img/home/order/order1.webp","e36c14b66697f78d4ebf4ca89aee1897"],["img/home/order/order2.webp","606e189d6647f3118289da471909ecc1"],["img/home/order/order3.webp","cdaa95476214908252a84a6315f8c404"],["img/home/order/order4.webp","5abafcdd4e4936cd7a5cb321a4c50823"],["img/home/promotion.png","98f30b20a4664fac05281341b4fe46ed"],["img/home/promotion2.png","6682df2595d3b8c0a05e79067c8eae98"],["img/home/rewards/rewards1.webp","ed139f1048310e2210bc35dac907b225"],["img/home/rewards/rewards2.webp","2c94cb5f7eeb9b1d07bf5038574967a7"],["img/home/rewards/rewards3.webp","79b8726a71408a16269816c8340d618f"],["img/home/rewards/rewards4.webp","df8764221da084ed33c220a2c9aed8af"],["img/home/rewards/rewards_logo.png","607878ddcc6201defd5226d822e77060"],["img/home/store/meet.webp","99946858a77eea78830529723c20befe"],["img/home/store/store.png","60af99fb97e8efe45ef2c51a576e7187"],["img/home_coffee_bg.png","3b20769fb1dc87789dd76dfe7ad0b164"],["img/logo.png","ce7af6bfbead4bea496f359167657a3c"],["img/logo_dark.png","b2a0efd85953f9f4fd892c6060fbca49"],["img/menu/beverage/americano.png","0eca055a264df851cc4506e8e7737404"],["img/menu/beverage/coldbrew.png","e810203177950c33928331ce588457d5"],["img/menu/beverage/dolce.png","964d2f438f9f67fda2744b8a20cf0ba2"],["img/menu/beverage/espressochip.png","e4a4af3ebc7b7c008bfe3f9bdb8f0b1e"],["img/menu/beverage/grande.svg","f1be77cb9fdd734c8ed4bd037e4d110e"],["img/menu/beverage/grande_active.svg","f9774c63625b6f25e0976bb1b261d216"],["img/menu/beverage/grapefruit.png","88598c7cb4e9d17683df3a2f00ad96b3"],["img/menu/beverage/javachip.png","4aaf8914f38713ceec7955c5fae7a4de"],["img/menu/beverage/latte.png","ee0b278db429656a2a19767ddd0e5a03"],["img/menu/beverage/malcha.png","b6e8ce898e67f144c6a4b16422916596"],["img/menu/beverage/malchacream.png","3d6e314fcd784114a77a749936b2ba35"],["img/menu/beverage/milktea.png","a2aac291a67e8479d559fd17a91d0fc0"],["img/menu/beverage/mocha.png","e863ceb821d2d91cbaf11b8a4743bba7"],["img/menu/beverage/strawberry.png","c32595a00779c34fbc580ccc414c8969"],["img/menu/beverage/tall.svg","e83ebb3f158631e368a6628197d163ba"],["img/menu/beverage/tall_active.svg","b85ca3297cc3053f06d3af154e340e06"],["img/menu/beverage/venti.svg","04792323ee7c8898687a67c48d23acc2"],["img/menu/beverage/venti_active.svg","48e8900969b0e345fabf914f26e3ff40"],["img/menu/dessert/bagel.jpeg","743150813e597d4fe299dc0a5bb37ae2"],["img/menu/dessert/burnt.jpeg","d3a57228524a0b9fc30b6e5c62dc778c"],["img/menu/dessert/castella.jpeg","7a3722f2213aa939c4ee28a59bd6e4dc"],["img/menu/dessert/chocolat.jpeg","eb8e231c6731c884066264b0a60b5a54"],["img/menu/dessert/cloud.jpeg","ab76c9645653e355d99f2d49e0380dd8"],["img/menu/dessert/cookie.jpg","c15901d59a82fd16290af455beaea4e6"],["img/menu/dessert/danish.jpeg","e9a26ded149ef5c2a10278be6688be6c"],["img/menu/dessert/ganache.jpeg","e8dbe6113b71c9b459e0d44b95ffba84"],["img/menu/dessert/morning.jpeg","22d8b87a867306cc05abd58396b3d278"],["img/menu/dessert/muffin.jpeg","b689e656d11e5bcf19d4b064f57dc3aa"],["img/menu/dessert/sandwich.jpeg","f3e4fb0383e92bdd8368b3ae60d1268d"],["img/menu/dessert/tiramisu.jpg","40d1526421f88df83f1e8cb9fae30496"],["img/menu/promotion/aurora.jpeg","c406dd7121dc6e86a188906205502e92"],["img/menu/promotion/baumkuchen.jpeg","aa7c3c4b51fd5f8afeff33d8d4823721"],["img/menu/promotion/brownie.jpeg","a69ee639f0d3db030b9df8d39656d778"],["img/menu/promotion/scotch.jpeg","e24c6c2bdcd83172e9ecca6c96af9d8c"],["img/menu/promotion/sweetpotato.jpeg","b87af0e5d467fa25dfc6f2f7e77cc947"],["img/menu/promotion/tangerine.jpeg","8a8908f7b67e6ef17d0abdc58d40fb26"],["img/menu/promotion/toffeenut.jpg","2d4e0642d7c83f4b994eb8326018d6de"],["img/menu/promotion/velvet.jpeg","ef9ba78c097eee0d26fdb80756c1ca40"],["img/menu/search_icon.png","a7a768f7fa416ea2e3174fe7e8a1e79e"],["img/rewards/all1.png","92c2468b0353f7922777e3304dccd5e8"],["img/rewards/all2.png","2e94f1fe2401f488d9caa9a1b8144178"],["img/rewards/all3.png","1bedfc3d8e33ce74580b162f0a690453"],["img/rewards/basic1.webp","f4fb0ac1385389e413f96d01b43902ee"],["img/rewards/basic2.webp","23fd50b3625446018f798dd3b09bc788"],["img/rewards/basic3.webp","f115ac17c434b30ceef928a27ad79baf"],["img/rewards/gold1.png","c0fc78be1fb6b1ce4b0c87dcbff7ec74"],["img/rewards/gold2.png","03500b00af17da62afd8afcdec946b1f"],["img/rewards/gold3.png","7a73847d7f63d2c889281627d8fb874e"],["img/rewards/green1.png","cce31bfe50b3448bd5eb9a0d0ad408e8"],["img/rewards/green2.png","98c4fd491c7503a15ae91fffeeb96b86"],["img/rewards/green3.png","7703e1262c83c420d78d4ead7ef419d4"],["img/rewards/level_gold.png","cca0571244dcf03b59ec75b7755fe1b5"],["img/rewards/level_green.png","0188f61a4d94c7ab4055e05e2a180515"],["img/rewards/level_welcome.png","9008b6686c453d18a8a8bd22c76f298e"],["img/rewards/process1.png","db0a7611982d287db9c86f0cf3611aed"],["img/rewards/process2.webp","e420790c78b849adefab07880c55ddda"],["img/rewards/process3.webp","e3ad9055d48bf129b99a375d78087b36"],["img/rewards/rewards_bg.jpg","43881ba30b74f5dd5927490a1e221968"],["img/rewards/rewards_bg_pc.jpg","911b236e450de3a577b02a7d2ec75216"],["img/rewards/welcome.png","3c7f548eee140a9ceca11abde80ec861"],["index.html","02ffd42f65f3f592f08ec9417a8dd590"],["js/main.js","3487bbf4b88f70031321a32f7c5988e9"],["js/map.js","ce69eb6bc97912ab6786d07098e0ecf3"],["js/menu.js","4e1cb860c6ee3875438a3a14c94605e6"],["login.html","9eeda5b6c959289c8a389cb72dafe7f2"],["manifest.json","fd873d4491ad0c73750f9f24f7f8c553"],["menu.html","5e13bb47d4b1d1c9fcb1563a0bdbd8c8"],["rewards.html","b034436a669125ea77e73dc6b23b5018"],["sw-precache-config.js","e4ce52c7316be75f9d852c82dcb2c426"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







