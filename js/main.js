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
