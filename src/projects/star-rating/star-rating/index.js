// 별점이 저장되어있지 않을 때
// 별점이 저장되어 있을 때
const starOnEnter = el => {
  // TODO selected인지 아닌지 판별
  el.classList.add('hovered');
};

const starOnLeave = el => {
  // TODO selected인지 아닌지 판별
  el.classList.remove('hovered');
};

const ratingHandler = e => {
  // onclick이 되면, elem.dispatchEvent(new CustomEvent detail {rating: idx})
  if (!e.target.classList.contains('bxs-star')) return;

  const ratingChange = new CustomEvent('rating-change', {
    bubbles: true,
    detail: {
      rating: e.target.dataset.starIdx
    }
  });

  e.target.dispatchEvent(ratingChange);
};

const starOnMouseOver = e => {
  const idx = e.target.dataset.starIdx;
  if (!idx) return;

  const container = e.target.closest('.star-rating-container');

  if (container.hasChildNodes()) {
    const childrens = container.childNodes;
    for (let i = 0; i < idx; i++) {
      starOnEnter(childrens[i]);
    }
  }
};

const starOnMouseout = e => {
  const targetFrom = e.target;
  const targetTo = e.relatedTarget;

  if (!targetFrom.classList.contains('bxs-star')) return;

  const starRatingContainer = targetFrom.closest('.star-rating-container');

  if (!targetTo.classList.contains('bxs-star')) {
    // 별점 컴포넌트에서 mouseout
    if (starRatingContainer.hasChildNodes()) {
      const childrens = starRatingContainer.childNodes;

      for (let i = 0; i < childrens.length; i++) {
        starOnLeave(childrens[i]);
      }
    }
  } else {
    // 별 하나에서 mouseout
    starOnLeave(targetFrom);
  }
};

const StarRating = $container => {
  const { maxRating } = $container.dataset;
  const starRatingContainer = document.createElement('div');
  starRatingContainer.className = 'star-rating-container';

  for (let i = 1; i <= maxRating; i++) {
    const star = document.createElement('i');
    star.dataset.starIdx = i;
    star.className = 'bx bxs-star';
    starRatingContainer.appendChild(star);
  }

  $container.append(starRatingContainer);

  starRatingContainer.addEventListener('mouseover', starOnMouseOver);
  starRatingContainer.addEventListener('mouseout', starOnMouseout);
  starRatingContainer.addEventListener('click', ratingHandler);
};

export default StarRating;
