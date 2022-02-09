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
  btn.classList.remove('open-menu');
  document.querySelector('body').classList.remove('overflow');
  document.querySelector('.close').classList.remove('hidden');
  openMenu.classList.remove('open');
}

const cards = document.querySelectorAll('.card-animal');

cards.forEach((card, i) => {
  if (i > 2) {
    card.classList.add('hidden');
  }
});
