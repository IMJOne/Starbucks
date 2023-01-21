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
