'use strict';

// Reserve store map (Google Maps API)
function initMap() {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: { lat: 37.5001276, lng: 127.0290304 }, // green academy
    disableDefaultUI: true,
    scrollwheel: true,
  });

  // Array of store list
  const stores = [
    {
      name: '스타벅스 강남R점 ⭐',
      lat: 37.497853,
      lng: 127.028587,
      address: '서울특별시 강남구 강남대로 390 (역삼동)',
    },
    {
      name: '스타벅스 코엑스몰R점 ⭐',
      lat: 37.509965,
      lng: 127.0615809,
      address: '서울특별시 강남구 영동대로 513 (삼성동) 코엑스 A106호',
    },
    {
      name: '스타벅스 홍대입구역 사거리R점 ⭐',
      lat: 37.554688,
      lng: 126.92029,
      address: '서울특별시 마포구 양화로 125 (서교동)',
    },
    {
      name: '스타벅스 합정 폴리스R점 ⭐',
      lat: 37.5509746,
      lng: 126.9134915,
      address: '서울특별시 마포구 양화로 45 (서교동, 메세나폴리스)',
    },
    {
      name: '스타벅스 여의도공원R점 ⭐',
      lat: 37.5295833,
      lng: 126.9255779,
      address: '서울특별시 영등포구 여의공원로 101 (여의도동)',
    },
    {
      name: '스타벅스 여의도KBS R점 ⭐',
      lat: 37.5267354,
      lng: 126.918121,
      address: '서울특별시 영등포구 의사당대로 26 (여의도동)',
    },
    {
      name: '스타벅스 여의도역R점 ⭐',
      lat: 37.5236143,
      lng: 126.9234061,
      address: '서울특별시 영등포구 의사당대로 83 (여의도동) 1층',
    },
    {
      name: '스타벅스 여의도 IFC몰(L1)R점 ⭐',
      lat: 37.5255407,
      lng: 126.9258582,
      address: '서울특별시 영등포구 국제금융로 10 (여의도동) 지하1층 178호',
    },
    {
      name: '스타벅스 더현대서울(B2)R점 ⭐',
      lat: 37.5262674,
      lng: 126.928329,
      address: '서울특별시 영등포구 여의대로 108 (여의도동)',
    },
    {
      name: '스타벅스 마곡사이언스타워R점 ⭐',
      lat: 37.5608434,
      lng: 126.8338524,
      address: '서울특별시 강서구 마곡동로 62 (마곡동)',
    },
    {
      name: '스타벅스 타임스퀘어R점 ⭐',
      lat: 37.517007,
      lng: 126.9041419,
      address: '서울특별시 영등포구 영중로 15 지하 1층 (영등포동4가)',
    },
    {
      name: '스타벅스 보라매공원R점 ⭐',
      lat: 37.4922539,
      lng: 126.9235512,
      address: '서울특별시 동작구 보라매로5길 35 (신대방동, 파크스퀘어,보라매현대APT)',
    },
    {
      name: '스타벅스 용산역 써밋R점 ⭐',
      lat: 37.5274083,
      lng: 126.9657111,
      address: '서울특별시 용산구 한강대로 69 (한강로2가, 용산푸르지오써밋)',
    },
    {
      name: '스타벅스 관악 서울대입구R점 ⭐',
      lat: 37.4792788,
      lng: 126.9526694,
      address: '서울특별시 관악구 관악로 158 (봉천동)',
    },
  ];

  // Make store infowindow
  const infowindow = new google.maps.InfoWindow();
  const bounds = new google.maps.LatLngBounds();

  for (let i = 0; i < stores.length; i++) {
    const store = stores[i];
    const marker = new google.maps.Marker({
      position: { lat: store.lat, lng: store.lng },
      map,
      address: store.address,
      title: store.name,
      icon: {
        url: 'img/coffee/reserve/map_marker.png', // change marker icon image
      },
    });
    bounds.extend(marker.position);

    const reserveStoreInfo = `
    <div class="store">
      <strong class="store__title">${marker.title}</strong>
      <hr class="store__divider">
      <div class="map__store">
        <p class="store__address">${marker.address}</p>
        <p class="store__tel">1522-3232</p>
      </div>
      <div class="store__icons">
        <img src="img/coffee/reserve/store_icon1.png" />
        <img src="img/coffee/reserve/store_icon2.png" />
        <img src="img/coffee/reserve/store_icon3.png" />
        <img src="img/coffee/reserve/store_icon4.png" />
        <img src="img/coffee/reserve/store_icon5.png" />
      </div>
    </div>`;

    // PC
    marker.addListener('mouseover', () => {
      infowindow.open(map, marker);
      infowindow.setContent(reserveStoreInfo);
      map.panTo(marker.position);
    });

    // Mobile
    marker.addListener('click', () => {
      infowindow.open(map, marker);
      infowindow.setContent(reserveStoreInfo);
      map.panTo(marker.position);
      map.setZoom(15);
    });
  }
  map.fitBounds(bounds);

  // Store map popup open & close
  const findReserveStroe = document.querySelector('.reserve__store');
  const storeMap = document.querySelector('.store__map');
  const mapCloseBtn = document.querySelector('.map__close-btn');

  findReserveStroe.addEventListener('click', () => {
    storeMap.style.transform = `translate(-50%, -50%) scale(1)`;
  });
  mapCloseBtn.addEventListener('click', () => {
    storeMap.style.transform = `translate(-50%, -50%) scale(0)`;
    setTimeout(() => {
      infowindow.close();
      map.fitBounds(bounds); // reset for infowindow and map origin
    }, 800);
  });
}
window.initMap = initMap;
