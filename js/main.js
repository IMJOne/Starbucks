'use strict';

// Animation & Loading
const loading = document.querySelector('.loading');
window.addEventListener('load', () => {
  if (loading) {
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'auto';
      loading.style.opacity = 0;
      AOS.init({ duration: 1000 });
      ScrollOut({ threshold: 0.2, once: true });
      Splitting();
      loading.style.display = 'none';
    }, 1000);
  } else {
    AOS.init({ duration: 1000 });
  }
});

// All function of the header & arrow
const nav = document.querySelector('nav');
const dark = document.querySelector('.dark');
const trigger = document.querySelector('.header__trigger');
const close = document.querySelector('.nav__close');
const backward = document.querySelector('.header__backward');
const arrowUpBtn = document.querySelector('.btn__arrow-up');

container.addEventListener('click', e => {
  const target = e.target;

  switch (target) {
    case trigger:
      nav.classList.add('open');
      dark.classList.add('open');
      break;
    case close:
    case dark:
      nav.classList.remove('open');
      dark.classList.remove('open');
      break;
    case backward:
      window.history.back();
      break;
    case arrowUpBtn:
      container.scrollIntoView({ behavior: 'smooth' });
    default:
      return;
  }
});
