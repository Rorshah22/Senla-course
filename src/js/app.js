import '../scss/app.scss';

const btn = document.querySelector('.menu-burger');

btn.addEventListener('click', () => {
  btn.classList.toggle('open-menu');
  console.log('hi');
  document.querySelector('.social-list').classList.toggle('hidden');
  // document.querySelector('.menu-box').classList.toggle('open');
  document.querySelector('.menu-box').classList.toggle('menu-list');
});
