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

// Login form
const loginForm = document.querySelector('.login__form');

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();

    if (id.value === '' || pw.value === '') {
      Swal.fire({
        title: `입력 정보가\n올바르지 않습니다.`,
        text: '아이디나 비밀번호를 확인해주세요.',
        icon: 'question',
        button: '확인',
      }).then(() => {
        id.focus();
      });
    } else {
      Swal.fire('죄송합니다.', '현재 점검 중인 관계로 로그인이 불가합니다', 'warning').then(() => {
        let timerInterval;
        Swal.fire({
          title: '로그인 실패',
          html: '<b></b> 초 후에 메인 페이지로 이동합니다.',
          icon: 'error',
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            timerInterval = setInterval(() => {
              Swal.getHtmlContainer().querySelector('b').textContent = (Swal.getTimerLeft() / 1000).toFixed(0);
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then(() => {
          window.location.href = 'index.html';
        });
      });
    }
  });
}

// Show arrow up btn
document.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    arrowUpBtn.classList.add('show');
  } else {
    arrowUpBtn.classList.remove('show');
  }
});

// Home rewards carousel
const carousel = document.querySelector('.carousel');
if (window.innerWidth > 600 && carousel) {
  carousel.setAttribute('data-flickity', '{ "wrapAround": true }');
}
