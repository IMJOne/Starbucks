'use strict';

// Menu filtering
const menuCategories = document.querySelector('.menu__categories');
const articleOfMenu = document.querySelectorAll('.menu__article');

menuCategories.addEventListener('click', e => {
  const menuActive = document.querySelector('.category__btn.active');
  const underline = document.querySelector('.underline');

  // 클릭한 버튼 active
  menuActive.classList.remove('active');
  e.target.classList.add('active');
  underline.style.left = `${e.target.offsetLeft}px`;

  // 클릭한 카테고리의 메뉴들만 필터링해서 보여줌
  const filter = e.target.dataset.filter;

  menuContainer.classList.add('animate');
  setTimeout(() => {
    articleOfMenu.forEach(article => {
      if (filter === 'all' || filter === article.dataset.type) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
    menuContainer.classList.remove('animate');
  }, 300);
});

// Search for menu
// 특수문자 처리
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function ch2pattern(ch) {
  // 사용자가 초성만 입력한 경우
  if (/[ㄱ-ㅎ]/.test(ch)) {
    const chToBegin = {
      ㄱ: '가'.charCodeAt(0),
      ㄲ: '까'.charCodeAt(0),
      ㄴ: '나'.charCodeAt(0),
      ㄷ: '다'.charCodeAt(0),
      ㄸ: '따'.charCodeAt(0),
      ㄹ: '라'.charCodeAt(0),
      ㅁ: '마'.charCodeAt(0),
      ㅂ: '바'.charCodeAt(0),
      ㅃ: '빠'.charCodeAt(0),
      ㅅ: '사'.charCodeAt(0),
      ㅆ: '싸'.charCodeAt(0),
      ㅇ: '아'.charCodeAt(0),
      ㅈ: '자'.charCodeAt(0),
      ㅊ: '차'.charCodeAt(0),
      ㅋ: '카'.charCodeAt(0),
      ㅌ: '타'.charCodeAt(0),
      ㅍ: '파'.charCodeAt(0),
      ㅎ: '하'.charCodeAt(0),
    };

    const begin = chToBegin[ch];
    const end = begin + 587;
    return `[${ch}\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
  }

  // 사용자가 초성 + 중성 또는 초성 + 중성 + 종성을 입력한 경우
  else if (/[가-히]/.test(ch)) {
    const offset = '가'.charCodeAt(0);
    const chCode = ch.charCodeAt(0) - offset;

    // 사용자가 초성 + 중성을 입력한 경우
    if (chCode % 28 <= 0) {
      const begin = Math.floor(chCode / 28) * 28 + offset;
      const end = begin + 27;
      return `[\\u${begin.toString(16)}-\\u${end.toString(16)}]`;
    }
    // 사용자가 초성 + 중성 + 종성을 입력한 경우
    else return ch;
  }

  // 한글이 입력되지 않은 경우
  else {
    return escapeRegExp(ch);
  }
}

// 퍼지 문자열 검색을 위한 정규식 생성
function createFuzzyMatcher(input) {
  const pattern = input.split('').map(ch2pattern).join('.*?');
  return new RegExp(pattern);
}

// 한글 퍼지 문자열 검색
const searchBox = document.querySelector('.searchbox');
const searchInput = document.querySelector('.searchbox__input');
const menuItem = document.querySelectorAll('.menu__item');

searchInput.addEventListener('input', e => {
  const query = e.target.value;
  const regex = createFuzzyMatcher(query);

  for (let i = 0; i < menuItem.length; i++) {
    const menuName = menuItem[i].querySelector('.menu__name');

    if (regex.test(menuName.textContent.toLowerCase())) {
      menuItem[i].style.display = 'block';
    } else {
      menuItem[i].style.display = 'none';
    }
  }
});

// Open menu popup
const menuContainer = document.querySelector('.menu__container');
const menuPopup = document.querySelector('.menu__popup');
const Toast = Swal.mixin({
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 1600,
  showClass: {
    popup: 'animate__animated animate__fadeInDown animate__faster',
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp animate__faster',
  }, // Sweet alert
});

container.addEventListener('click', e => {
  const target = e.target;
  const menuPopupHeight = menuPopup.getBoundingClientRect().height;
  const menuPopupTop = window.innerHeight / 2 - menuPopupHeight / 2;

  if (target.className === 'menu__photo') {
    menuPopup.style.top = `${menuPopupTop}px`;
    dark.classList.add('open');

    // 팝업창 세부 정보를 클릭한 메뉴의 정보들로 변경
    let popupTitle = document.querySelector('.popup__title');
    let popupPhoto = document.querySelector('.popup__photo');
    let popupNameKr = document.querySelector('.popup__name-kr');
    let popupNameEn = document.querySelector('.popup__name-en');
    let popupDescription = document.querySelector('.popup__description');
    let popupSelect = document.querySelector('.popup__select');

    const popupName = target.nextElementSibling;
    const menuType = target.parentNode.dataset.type;
    const menuPhoto = target.getAttribute('src');
    const menuDescription = target.nextElementSibling.nextElementSibling.dataset.description;
    const menuOption = target.nextElementSibling.dataset.option;

    popupTitle.innerText = menuType;
    popupPhoto = popupPhoto.setAttribute('src', menuPhoto);
    popupNameKr.innerText = popupName.innerText;
    popupNameEn.innerText = popupName.dataset.nameEn;
    popupDescription.innerText = menuDescription;

    if (menuOption === 'warm') {
      popupSelect.children[0].innerText = 'Warmed';
      popupSelect.children[1].innerText = 'Not Warmed';
    } else {
      return;
    }
  }

  // Close popup
  else if (e.target === dark || e.target.className === 'btn__cancel' || e.target.classList.contains('popup__close-btn')) {
    menuPopup.style.top = `100%`;
    dark.classList.remove('open');
  } else if (e.target.className === 'btn__order') {
    Toast.fire({
      icon: 'warning',
      title: '로그인 후 이용 가능합니다.',
      timer: 1200,
      showClass: false,
    });
  } else {
    return;
  }
});

const popupHeart = document.querySelector('.popup__heart.fa-regular');
popupHeart.addEventListener('click', e => {
  e.currentTarget.firstElementChild.classList.toggle('filled');

  if (e.currentTarget.firstElementChild.classList.contains('filled')) {
    Toast.fire({
      icon: 'success',
      title: '나만의 메뉴에 추가되었습니다.',
    });
  } else {
    Toast.fire({
      icon: 'error',
      title: '나만의 메뉴에서 삭제되었습니다.',
    });
  }
});
