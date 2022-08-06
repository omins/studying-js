import { Nav, NewsList } from './components/index.js';

let state = {
  category: 'general',
  page: 1,
  pageSize: 5
};

state = new Proxy(state, {
  set(target, prop, value) {
    if (prop === 'category') {
      target[prop] = value;
      NewsList(target);
      return true;
    }
  }
});

const categoryHandler = e => {
  if (!e.target.classList.contains('category-item')) return;

  const ul = e.target.closest('ul');
  const prevActive = ul.querySelector('.active');

  prevActive.classList.remove('active');
  e.target.classList.add('active');
  state.category = e.target.id;
};

Nav();
NewsList(state);

const nav = document.querySelector('nav');
nav.addEventListener('click', categoryHandler);
