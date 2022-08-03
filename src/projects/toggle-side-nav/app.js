// do something!
// 페이지 읽어들일 때,
// toggle 상태가 있으면 get하고, 없으면 false로 set
// get한 상태를 기반으로 토글에 .active 추가
// unload 될 때 localStorage setItem -> 지원하지 않는 브라우저이거나, 브라우저가 crash 됐을 때 안 먹힐 수 있음

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

const toggleNav = (e) => {
  if (nav.className.includes('active')) {
    nav.classList.remove('active');
    localStorage.setItem(ACTIVE_CLASS_KEY, 'false');
  } else {
    nav.classList.add('active');
    localStorage.setItem(ACTIVE_CLASS_KEY, 'true');
    console.log('hi');
  }
};

const init = () => {
  window.addEventListener('DOMContentLoaded', setNavState);
  document.body.style.visibility = 'unset';
  toggleBtn.addEventListener('click', toggleNav);
};

init();
