import StarRating from './star-rating/index.js';

const $containers = [...document.querySelectorAll('.star-rating')];
const $currentRatings = document.querySelectorAll('.current-rating > span');
const starRatingStyle = document.createElement('link');
const scriptEl = document.querySelector('script[type="module"]');

starRatingStyle.setAttribute('rel', 'stylesheet');
starRatingStyle.setAttribute('href', 'star-rating/theme.css');
document.head.insertBefore(starRatingStyle, scriptEl);

$containers.forEach(($container, i) => {
  StarRating($container);

  // 이벤트 'rating-change'를 캐치해 화면에 표시한다.
  $container.addEventListener('rating-change', e => {
    const { rating } = e.detail;
    $currentRatings[i].textContent = rating;
  });
});
