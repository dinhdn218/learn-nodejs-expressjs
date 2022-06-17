const navs = document.querySelectorAll('.nav-link');

window.addEventListener('DOMContentLoaded', () => {
  navs.forEach((nav) => {
    if (nav.getAttribute('href') === window.location.pathname) {
      nav.classList.add('active');
    }
  });
});
