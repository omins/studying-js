import key from './apiKey.js';

const { API_KEY } = key;

const getNews = async (category, page, pageSize) => {
  const URL = `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;

  try {
    const news = await axios.get(URL);
    return news.data;
  } catch (e) {
    console.log(e);
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

const NewsList = () => {
  const root = document.querySelector('#root');

  const newsListContainer = document.createElement('div');
  newsListContainer.className = 'news-list-container';
  newsListContainer.innerHTML = '<article class="news-list"></article>';

  const scrollObserver = document.createElement('div');
  scrollObserver.className = 'scroll-observer';
  scrollObserver.innerHTML = '<img src="img/ball-triangle.svg" alt="Loading..." />';

  root.appendChild(newsListContainer);
  root.appendChild(scrollObserver);

  const category = 'general';
  const page = 2;
  const pageSize = 5;

  getNews(category, page, pageSize).then(data => {
    const { articles } = data;
    articles.forEach(item => {
      renderNews(item);
    });
  });
};
export default NewsList;
