import '../scss/app.scss';

const btn = document.querySelector('.menu-burger');

btn.addEventListener('click', () => {
  btn.classList.toggle('open-menu');
  const openMenu = document.querySelectorAll('.menu-box');
  openMenu.forEach((element) => {
    element.classList.toggle('open');
  });
  document.querySelector('.header').classList.toggle('header-background-menu');
});
