import '../scss/app.scss';

const btn = document.querySelector('.menu-burger');
const links = document.querySelectorAll('.menu-item');
const openMenu = document.querySelectorAll('.menu-box');

btn.addEventListener('click', (e) => {
  btn.classList.toggle('open-menu');
  openMenu.forEach((element) => {
    element.classList.toggle('open');
  });
  document.querySelector('body').classList.toggle('overflow');
});

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    document.querySelector('body').classList.remove('overflow');
    openMenu.forEach((element) => {
      element.classList.remove('open');
    });
    btn.classList.remove('open-menu');
  });
});
