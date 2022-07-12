import CONFIG from '../../globals/config';

const createRatingItemTemplate = (item) => {
  const rating = Math.round(parseFloat(item));
  let createRating = '';
  for (let index = 0; index < 5; index += 1) {
    createRating += (index < rating) ? '<span class="fa fa-star filled"></span>' : '<span class="fa fa-star"></span>';
  }
  return createRating;
};

const createRestoMenuTemplate = (menus) => {
  let menu = '';
  menus.forEach((food) => {
    menu += `<span><i class="fa fa-check filled"></i> ${food.name}</span>`;
  });
  return menu;
};

const createCustomerReviewTemplate = (reviews) => {
  let theReviews = '';
  reviews.forEach((review) => {
    theReviews += `<div class="review">
      <div class="reviewer">
        <h4>${review.name}</h4>
        <span class="date-review">(${review.date})</span>
      </div>
      <div class="comment">${review.review}</div>
      </div>`;
  });
  return theReviews;
};

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="resto-detail">
    <article class="resto-info">
      <img tabindex="0" class="lazyload resto-poster" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Image of ${restaurant.name}" />
      <p tabindex="0" class="resto-address">${restaurant.address} - ${restaurant.city}</p>
      <span tabindex="0" class="rating-star">
          <span class="star-icon">${createRatingItemTemplate(restaurant.rating)}</span>
          <span class="average-rating">${restaurant.rating} average of 5 star</span>
      </span>
    </article>
    <article class="resto-overview">
      <div tabindex="0">
      <h3>Food Categories</h3>
      <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
      </div>
      <div tabindex="0">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
      </div>
    </article>
  </div>
  <div class="resto-addional">
    <div tabindex="0" class="food-menu">
      <h3>Foods Menu</h3>
      ${createRestoMenuTemplate(restaurant.menus.foods)}
    </div>
    <div tabindex="0" class="drink-menu">
      <h3>Drink Menu</h3>
      ${createRestoMenuTemplate(restaurant.menus.drinks)}
    </div>
    <div tabindex="0" class="customer-review">
      <h3>Customer Review</h3>
      <div id="customer-review">
        ${createCustomerReviewTemplate(restaurant.customerReviews)}
      </div>
    </div>
    <div class="customer-comment" id="customer-comment">
      <h3 tabindex="0">Give Review</h3>
      <div class="comment-column">
        <form id="send-review" method="POST" action="#">
          <div tabindex="0" class="input-column">
            <div class="label">Name</div>
            <div class="input">
              <input tabindex="0" id="reviewer-name" type="text" name="reviewer_name" placeholder="Enter your name" class="input-control" />
            </div>
          </div>
          <div tabindex="0" class="input-column">
            <div class="label">Review</div>
            <div class="input">
              <textarea tabindex="0" name="reviewer_comment" id="reviewer-comment" placeholder="Enter your review" class="input-control" rows=6></textarea>
            </div>
          </div>
          <div class="send-column">
            <input tabindex="0" id="sendform" type="submit" value="Send" class="btn sendform" />
          </div>
        </form>
      </div>
    </div>
  </div>`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <article tabindex="0" class="card">
          <div tabindex="0" class="card-header">
              <a tabindex="-1" href="/#/detail/">
                  <img class="details" height="250px" width="100%" src="./placeholder.png" alt="Skeleton" />
                  <div class="card-title"><h3>Restaurant</h3><h4>Lokasi: Restaurant City</h4></div>
              </a>
          </div>
          <div class="card-content">
              <div tabindex="0" class="rating-container">
                  <div class="user-rating">
                      <div class="rating-text">
                          <span>User</span>
                          <span>Rating</span>
                      </div>
                      <span class="rating-star">
                          <span class="star-icon">
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                            <span class="fa fa-star"></span>
                          </span>
                          <span class="average-rating">5 average of 5 star</span>
                      </span>
                  </div>
              </div>
              <p tabindex="0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil...</p>
              <a tabindex="0" href="/#/detail/" class="btn read-more">Read More</a>
          </div>
      </article>`;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
  <article tabindex="0" class="card" id="${restaurant.id}">
      <div tabindex="0" class="card-header">
          <a tabindex="-1" href="/#/detail/${restaurant.id}">
              <img class="lazyload details" src="./placeholder.png" data-src="${CONFIG.SMALL_IMAGE_URL + restaurant.pictureId}" alt="Restoran ${restaurant.name}" />
              <div class="card-title"><h3>${restaurant.name}</h3><h4>Lokasi: ${restaurant.city}</h4></div>
          </a>
      </div>
      <div class="card-content">
          <div tabindex="0" class="rating-container">
              <div class="user-rating">
                  <div class="rating-text">
                      <span>User</span>
                      <span>Rating</span>
                  </div>
                  <span class="rating-star">
                      <span class="star-icon">${createRatingItemTemplate(restaurant.rating)}</span>
                      <span class="average-rating">${restaurant.rating} average of 5 star</span>
                  </span>
              </div>
          </div>
          <p tabindex="0">${restaurant.description.slice(0, 210)}...</p>
          <a tabindex="0" href="/#/detail/${restaurant.id}" class="btn read-more">Read More</a>
      </div>
  </article>`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like liked">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createCustomerReviewTemplate,
  createSkeletonRestaurantTemplate,
};
