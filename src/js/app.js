import '../scss/app.scss';

const btn = document.querySelector('.menu-burger');
const links = document.querySelectorAll('.menu-item');
const openMenu = document.querySelector('.menu-box');
const close = document.querySelector('.close');

btn.addEventListener('click', () => {
  btn.classList.toggle('open-menu');
  openMenu.classList.toggle('open');
  document.querySelector('body').classList.toggle('overflow');
  document.querySelector('.close').classList.toggle('hidden');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    exitMenu();
  });
});

close.addEventListener('click', () => {
  exitMenu();
});

function exitMenu() {
  document.querySelector('body').classList.remove('overflow');
  document.querySelector('.close').classList.remove('hidden');
  openMenu.classList.remove('open');
}
