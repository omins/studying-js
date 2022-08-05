const starOnEnter = el => {
  if (!el.classList.contains('selected')) {
    el.classList.add('hovered');
  }
};

const starOnLeave = el => {
  el.classList.remove('hovered');
};

const starOnSelect = el => {
  el.classList.remove('hovered');
  el.classList.add('selected');
};

const starOnChange = el => {
  el.classList.remove('selected');
};

const starRatingHandler = e => {
  if (!e.target.classList.contains('bxs-star')) return;
  const { starIdx } = e.target.dataset;
  const ratingChange = new CustomEvent('rating-change', {
    bubbles: true,
    detail: {
      rating: starIdx
    }
  });

  e.target.dispatchEvent(ratingChange);
  const container = e.target.closest('.star-rating-container');

  if (container.hasChildNodes()) {
    const childrens = container.childNodes;

    childrens.forEach((el, idx) => {
      if (idx < starIdx) {
        starOnSelect(el);
      } else {
        starOnChange(el);
      }
    });
  }
};

const starMouseoverHandler = e => {
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

const starMouseoutHandler = e => {
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

  starRatingContainer.addEventListener('mouseover', starMouseoverHandler);
  starRatingContainer.addEventListener('mouseout', starMouseoutHandler);
  starRatingContainer.addEventListener('click', starRatingHandler);
};

export default StarRating;
