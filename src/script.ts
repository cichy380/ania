import Typed from 'typed.js';
import A11yDialog from 'a11y-dialog'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import scrollLock from './scroll-lock';

const options = {
  strings: ['magistrem fizjoterapii', 'instruktorem wad postawy', 'terapeutką PNF'],
  loop: true,
  typeSpeed: 40,
  startDelay: 0,
  backSpeed: 20,
  backDelay: 2000,
  contentType: 'null',
};

new Typed('#typed', options);


const topbar = document.getElementById('topbar');
const topbarLogo = document.getElementById('topbar-logo');
window.addEventListener('scroll',() => {
  if(window.scrollY > 32) {
    topbar && topbar.classList.add('shadow-light');
    topbarLogo && topbarLogo.classList.add('scale-75');
    topbarLogo && topbarLogo.classList.add('-translate-x-6');
    topbarLogo && topbarLogo.classList.remove('py-3');
  } else {
    topbar && topbar.classList.remove('shadow-light');
    topbarLogo && topbarLogo.classList.remove('scale-75');
    topbarLogo && topbarLogo.classList.remove('-translate-x-6');
    topbarLogo && topbarLogo.classList.add('py-3');
  }
});


const container = document.querySelector('.dialog');
const dialog = new A11yDialog(container as Element);
dialog.on('show', (_, __) => {
  // document.body.setAttribute('style','overflow:hidden');
  scrollLock.disablePageScroll();
});
dialog.on('hide', (_, __) => {
  // document.body.removeAttribute('style');
  scrollLock.enablePageScroll();
})


tippy('.tooltip-pnf', {
  content: 'proprioceptywne nerwowo-mięśniowe torowanie (ang. proprioceptive neuromuscular facilitation)',
  placement: 'top',
  arrow: true,
})
