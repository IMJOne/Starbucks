![starkbucks](https://user-images.githubusercontent.com/110226567/213872431-77b95d8d-bcec-45fb-9b31-4dc01f166d40.png)

# ⭐ Starbucks

Starbucks PWA 사이트 👉 [Demo](https://imjone.github.io/starbucks/)

<br />

## 📢 프로젝트 개요

PWA(Progressive Web Application)를 메인 컨셉으로 잡고 진행한 프로젝트입니다.<br />
대표적인 예가 있는 스타벅스를 주제로 잡아서 사이트 전체적으로 리뉴얼하였으며,<br />
메인 페이지와 서브 페이지 전부 빠짐 없이 동작하도록 제작하였습니다.

<br />

## 🗨️ 사용 기술

<p>
  <img src="https://img.shields.io/badge/HTML-e34f26?style=flat-square&logo=HTML5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS-1572b6?style=flat-square&logo=CSS3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-f7df1e?style=flat-square&logo=JavaScript&logoColor=white" />
  <img src="https://img.shields.io/badge/Google Maps API-4285F4?style=flat-square&logo=Google&logoColor=white" />
</p>

<br />

## 📋 주요 기능

- 다양한 상황에 맞는 팝업창 노출
- 메뉴명 초성 검색 카테고리 필터링
- 메뉴 상세 정보 및 주문 옵션 팝업창
- Google Maps API를 활용한 매장 지도
- 멤버십 카드 이미지 슬라이더

<br />

## 💻 소스 코드

전체 코드 보러 가기 👉 [Notion](https://www.notion.so/imjone/Starbucks-68398a8c085f4045bc1da00a6173849e?pvs=4)

### 📍 매니페스트 파일 세팅

PWA 설치 및 앱의 구성 정보를 담고 있는`manifest.json` 파일을 설정해주었습니다.<br />

```json
{
  "dir": "auto",
  "lang": "ko",
  "name": "Starbucks Korea",
  "short_name": "Starbucks",
  "background_color": "#00704a",
  "theme_color": "#00704a",
  "description": "Starbucks PWA site",
  "display": "standalone",
  "orientation": "any",
  "scope": "https://imjone.github.io/starbucks/",
  "start_url": "https://imjone.github.io/starbucks/",
  "categories": ["coffee", "dessert", "cafe"],
}
```

### 📍 메뉴 카테고리 필터링

각각의 카테고리와 메뉴 리스트에는 `data-` 속성이 정의되어 있으며,<br />
카테고리 버튼 클릭 시 해당 속성과 일치하는 값을 지닌 메뉴만 필터링됩니다.

```html
<!-- Category -->
<div class="menu__categories">
  <button data-filter="all">전체 보기</button>
  <button data-filter="promotion">프로모션</button>
  <button data-filter="beverage">음료</button>
  <button data-filter="dessert">디저트</button>
</div>

<!-- Menu List -->
<article id="beverage" data-type="beverage"></article>
<article id="dessert" data-type="dessert"></article>
<article id="promotion" data-type="promotion"></article>
```
```javascript
const menuCategories = document.querySelector('.menu__categories');
const articleOfMenu = document.querySelectorAll('.menu__article');

menuCategories.addEventListener('click', e => {
  articleOfMenu.forEach(article => {
    if (filter === 'all' || filter === article.dataset.type) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
});
```

### 📍 구글 지도

지도의 중심점을 설정해주고, 매장 정보를 제공할 수 있는 `infowindow` 요소를 정의합니다.<br />
미리 준비해둔 매장 리스트 배열의 원소 개수만큼 반복문을 돌며 `marker`가 생성되고,<br />
마커를 클릭하면 정보창이 노출되며 해당 매장의 위치로 지도가 확대 및 이동됩니다.

```javascript
const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: { lat: 37.5001276, lng: 127.0290304 },
  disableDefaultUI: true,
  scrollwheel: true,
});

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
  
  marker.addListener('click', () => {
    infowindow.open(map, marker);
    infowindow.setContent(reserveStoreInfo);
    map.panTo(marker.position);
    map.setZoom(15);
  });
}
```

<br />

## 😊 배운 점 및 느낀 점

- 구글 지도를 커스텀하는 과정에서 API 활용 능력의 중요성을 느꼈습니다.
- 원하는 정보를 빠르게 찾아나갈 수 있는 정보 탐색 능력을 기를 수 있었습니다.
- 기능 구현에 있어 나 자신의 부족함을 느끼며, 더욱 열심히 해야겠다는 자극을 받았습니다.
