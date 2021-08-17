import '../scss/app.scss';

const btn = document.querySelector('.menu-burger');
const links = document.querySelectorAll('.menu-item');
const openMenu = document.querySelectorAll('.menu-box');
const close = document.querySelector('.close');

btn.addEventListener('click', () => {
  btn.classList.toggle('open-menu');
  openMenu.forEach((element) => {
    element.classList.toggle('open');
  });
  document.querySelector('body').classList.toggle('overflow');
  document.querySelector('.close').classList.toggle('hidden');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    exitMenu();
  });
});

close.addEventListener('click', (e) => {
  exitMenu();
  // console.log(e.target);
});

function exitMenu() {
  document.querySelector('body').classList.remove('overflow');
  openMenu.forEach((element) => {
    element.classList.remove('open');
  });
  btn.classList.remove('open-menu');
}
