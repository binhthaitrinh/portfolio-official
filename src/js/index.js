const aboutPos = document.querySelector('.introduction').offsetTop;
const projectPos = document.querySelector('.projects').offsetTop;
const skillPos = document.querySelector('.section-skills').offsetTop;
const contactPos = document.querySelector('.section-contact').offsetTop;

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.menu-bar');

menuBtn.addEventListener('click', () => {
  menu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('show');
});

const links = [
  { nav: '#home-menu', position: 0 },
  { nav: '#about-me-menu', position: aboutPos },
  { nav: '#projects-menu', position: projectPos },
  { nav: '#skills-menu', position: skillPos },
  { nav: '#contact-menu', position: contactPos },
  { nav: '#header-about-me-button', position: aboutPos },
  { nav: '#header-get-in-touch', position: contactPos }
];

links.forEach(link => {
  document.querySelector(link.nav).addEventListener('click', e => {
    menu.classList.remove('show');
    links.forEach(link => {
      document.querySelector(link.nav).classList.remove('current');
    });
    document.querySelector(link.nav).classList.add('current');
    // document.querySelector('.menu-bar').classList.add('fixed-menu');
    // links.forEach(link => {
    //   document.querySelector(link.nav).classList.remove('current');
    // });
    // document.querySelector(link.nav).classList.add('current');
    // location.hash = link.nav;

    // e.preventDefault();
    window.scrollTo(0, link.position);
  });
});

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const fixMenu = function() {
  console.log(window.scrollY);
  const menuHeight = document.querySelector('.menu-bar').offsetHeight;
  if (
    window.scrollY >= aboutPos - 2 * menuHeight &&
    window.scrollY <= projectPos - 2 * menuHeight
  ) {
    document.querySelector('.menu-bar').classList.add('fixed-menu');
    links.forEach(link => {
      document.querySelector(link.nav).classList.remove('current');
    });
    document.querySelector('#about-me-menu').classList.add('current');
  } else if (
    window.scrollY >= projectPos - 2 * menuHeight &&
    window.scrollY <= skillPos - 2 * menuHeight
  ) {
    document.querySelector('.menu-bar').classList.add('fixed-menu');
    links.forEach(link => {
      document.querySelector(link.nav).classList.remove('current');
    });
    document.querySelector('#projects-menu').classList.add('current');
  } else if (
    window.scrollY >= skillPos - 2 * menuHeight &&
    window.scrollY <= 2850
  ) {
    document.querySelector('.menu-bar').classList.add('fixed-menu');
    links.forEach(link => {
      document.querySelector(link.nav).classList.remove('current');
    });
    document.querySelector('#skills-menu').classList.add('current');
  } else if (window.scrollY >= 2850) {
    document.querySelector('.menu-bar').classList.add('fixed-menu');
    links.forEach(link => {
      document.querySelector(link.nav).classList.remove('current');
    });
    document.querySelector('#contact-menu').classList.add('current');
  } else {
    document.querySelector('.menu-bar').classList.remove('fixed-menu');
    links.forEach(link => {
      document.querySelector(link.nav).classList.remove('current');
    });
    document.querySelector('#home-menu').classList.add('current');
  }

  //   const menuHeight = document.querySelector('.menu-bar').offsetHeight;

  //   if (
  //     window.scrollY >= aboutPos - menuHeight &&
  //     window.scrollY <= projectPos - menuHeight
  //   ) {
  //     location.hash = '#about-me';
  //   } else if (window.scrollY >= projectPos && window.scrollY <= skillPos) {
  //     location.hash = '#projects';
  //   } else if (window.scrollY >= skillPos && window.scrollY <= contactPos) {
  //     location.hash = '#skills';
  //   } else {
  //     location.hash = '';
  //   }
};

window.addEventListener('scroll', debounce(fixMenu));
