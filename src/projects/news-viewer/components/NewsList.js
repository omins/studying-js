import key from './apiKey.js';

const { API_KEY } = key;
const root = document.querySelector('#root');

let page;
let category = '';
let pageSize = 0;

const getNews = async (category, page, pageSize) => {
  const URL = `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;

  try {
    const news = await axios.get(URL);
    return news.data;
  } catch (err) {
    if (err.response.status === 429) {
      alert('API Key를 변경해주세요.');
    } else {
      alert(err.message);
    }
  }
};

const renderNews = item => {
  const newsList = document.querySelector('.news-list');
  const newsItem = document.createElement('section');

  newsItem.className = 'news-item';
  newsItem.innerHTML = `<div class="thumbnail">
    <a href="${item.url}" target="_blank" rel="noopener noreferrer">
      <img
        src="${item.urlToImage}"
        alt="thumbnail" />
    </a>
  </div>
  <div class="contents">
    <h2>
      <a href="${item.url}" target="_blank" rel="noopener noreferrer">
        ${item.title}
      </a>
    </h2>
    <p>
      ${item.description}
    </p>
  </div>`;

  newsList.appendChild(newsItem);
};

const removeScrollObserver = msgNeeded => {
  const scrollObserver = document.querySelector('.scroll-observer');
  if (scrollObserver) {
    scrollObserver.remove();
  }

  if (msgNeeded) {
    const prevMsg = document.querySelector('.end-api-msg');

    if (!prevMsg) {
      const newsListContainer = document.querySelector('.news-list-container');
      const msg = document.createElement('p');
      msg.className = 'end-api-msg';
      msg.style.fontSize = '20px';
      msg.style.textAlign = 'center';
      msg.innerText = 'End of API Requests for this page';

      newsListContainer.appendChild(msg);
    }
  }
};

const handleIntersect = () => {
  if (page <= 20) {
    page++;

    getNews(category, page, pageSize).then(data => {
      const { articles } = data;

      if (articles.length > 0) {
        articles.forEach(item => {
          renderNews(item);
        });
      } else {
        removeScrollObserver(true);
      }
    }).catch(err => console.log(err.message));
  }
};

const createObserver = () => {
  const scrollObserver = document.querySelector('.scroll-observer');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(scrollObserver);
};

const NewsList = props => {
  category = props.category;
  page = props.page;
  pageSize = props.pageSize;

  const prevNews = document.querySelector('.news-list-container > .news-list');
  const prevMsg = document.querySelector('.end-api-msg');

  if (prevNews) {
    while (prevNews.firstChild) {
      prevNews.removeChild(prevNews.firstChild);
    }
    if (prevMsg) {
      prevMsg.remove();
    }
    removeScrollObserver(false);
  } else {
    const newsListContainer = document.createElement('div');
    newsListContainer.className = 'news-list-container';
    newsListContainer.innerHTML = '<article class="news-list"></article>';
    root.appendChild(newsListContainer);
  }

  getNews(category, page, pageSize).then(data => {
    const { articles } = data;
    articles.forEach(item => {
      renderNews(item);
    });

    const scrollObserver = document.createElement('div');
    const newsListContainer = document.querySelector('.news-list-container');
    scrollObserver.className = 'scroll-observer';
    scrollObserver.innerHTML = '<img src="img/ball-triangle.svg" alt="Loading..." />';
    newsListContainer.appendChild(scrollObserver);

    createObserver();
  }).catch(err => console.log(err.message));
};
export default NewsList;
