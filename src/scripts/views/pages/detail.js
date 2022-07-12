import UrlParser from '../../routes/url-parser';
import TheRestaurantSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FormInitiator from '../../utils/form-initiator';

const Detail = {
  async render() {
    return `
      <h2 tabindex="0" id="detail-resto" class="daftar-resto"></h2>
      <div id="restaurant-info" class="detail-content"></div>
      <div id="loader" class="loader"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const restaurantTitle = document.querySelector('#detail-resto');
    const loader = document.querySelector('#loader');
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await TheRestaurantSource.detailRestaurant(url.id);
      loader.remove();
      const restaurantContainer = document.querySelector('#restaurant-info');
      restaurantTitle.innerHTML = `Detail of ${restaurant.name}`;
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant,
      });
      FormInitiator.init({
        form: document.querySelector('#send-review'),
        id: restaurant.id,
        name: document.querySelector('#reviewer-name'),
        review: document.querySelector('#reviewer-comment'),
      });
    } catch (error) {
      restaurantTitle.innerHTML = 'We are trying to get data from our site, but you are curently offline, Please try again later';
      loader.remove();
    }
  },
};

export default Detail;
