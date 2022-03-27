import Typed from 'typed.js';

const options = {
  strings: ['magistrem fizjoterapii', 'instruktorem wad postawy', 'Ania Wielanek'],
  loop: true,
  typeSpeed: 40,
  startDelay: 0,
  backSpeed: 20,
  backDelay: 3500,
  contentType: 'null',
};

new Typed('#typed', options);

const nav = document.getElementById('topbar');
window.addEventListener('scroll',() => {
  if(window.pageYOffset > 0) {
    nav && nav.classList.add('shadow-light');
  } else {
    nav && nav.classList.remove('shadow-light');
  }
});
