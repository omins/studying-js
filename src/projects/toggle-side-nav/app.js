const ACTIVE_CLASS_KEY = 'navActive';
const nav = document.querySelector('nav');
const toggleBtn = document.querySelector('.toggle');

const isNavActive = () => {
  const stateInStorage = localStorage.getItem(ACTIVE_CLASS_KEY);
  if (stateInStorage === null) {
    return false;
  }
  return JSON.parse(stateInStorage);
};

const setNavState = () => {
  if (isNavActive()) {
    nav.classList.add('active');
    toggleBtn.classList.add('active');
  }
};

const toggleNav = () => {
  if (document.body.className.includes('preload')) {
    document.body.classList.remove('preload');
  }
  if (nav.className.includes('active')) {
    nav.classList.remove('active');
    localStorage.setItem(ACTIVE_CLASS_KEY, 'false');
  } else {
    nav.classList.add('active');
    localStorage.setItem(ACTIVE_CLASS_KEY, 'true');
  }
};

const init = () => {
  window.addEventListener('DOMContentLoaded', setNavState);
  toggleBtn.addEventListener('click', toggleNav);
  document.body.style.visibility = 'unset';
};

init();
