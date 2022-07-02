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
    topbarLogo && topbarLogo.classList.add('lg:scale-75');
    topbarLogo && topbarLogo.classList.add('lg:-translate-x-6');
    topbarLogo && topbarLogo.classList.remove('lg:py-3');
  } else {
    topbar && topbar.classList.remove('shadow-light');
    topbarLogo && topbarLogo.classList.remove('lg:scale-75');
    topbarLogo && topbarLogo.classList.remove('lg:-translate-x-6');
    topbarLogo && topbarLogo.classList.add('lg:py-3');
  }
});


const mobileSidebarOpenButton = document.getElementById('mobile-sidebar-open-button');
const mobileSidebarCloseButton = document.getElementById('mobile-sidebar-close-button');
const mobileSidebar = document.getElementById('mobile-sidebar');
const mobileSidebarContent = document.getElementById('mobile-sidebar-content');
const mobileSidebarLinks = document.querySelectorAll('#mobile-sidebar-content a');
mobileSidebarOpenButton && mobileSidebarOpenButton.addEventListener('click', () => openMobileSidebar());
mobileSidebarCloseButton && mobileSidebarCloseButton.addEventListener('click', () => closeMobileSidebar());
mobileSidebarLinks.forEach((link) => link.addEventListener('click', () => closeMobileSidebar()));

function openMobileSidebar() {
  mobileSidebar && mobileSidebar.classList.remove('hidden');
  setTimeout(() => mobileSidebar && mobileSidebar.classList.add('opacity-100'));
  setTimeout(() => mobileSidebarContent && mobileSidebarContent.classList.add('translate-x-0'), 150);
  scrollLock.disablePageScroll();
}

function closeMobileSidebar() {
  mobileSidebarContent && mobileSidebarContent.classList.remove('translate-x-0')
  setTimeout(() => mobileSidebar && mobileSidebar.classList.remove('opacity-100'), 150);
  setTimeout(() => mobileSidebar && mobileSidebar.classList.add('hidden'), 300);
  scrollLock.enablePageScroll();
}


const container = document.querySelector('.dialog');
const dialog = new A11yDialog(container as Element);
dialog.on('show', (_, __) => {
  // scrollLock.disablePageScroll(document.body);
});
dialog.on('hide', (_, __) => {
  // scrollLock.enablePageScroll(document.body);
})


tippy('.tooltip-pnf', {
  content: 'proprioceptywne nerwowo-mięśniowe torowanie (ang. proprioceptive neuromuscular facilitation)',
  placement: 'top',
  arrow: true,
})
