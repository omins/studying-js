const StarRating = $container => {
  const { maxRating } = $container.dataset;
  const starRatingContainer = document.createElement('div');
  starRatingContainer.className = 'star-rating-container';

  for (let i = 0; i < maxRating; i++) {
    const star = document.createElement('i');
    star.className = 'bx bxs-star';
    starRatingContainer.appendChild(star);
  }

  $container.append(starRatingContainer);
};

export default StarRating;
