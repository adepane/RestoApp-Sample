import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const FavoriteRestaurans = {
  async render() {
    return `
      <h2 tabindex="0" id="daftar-resto" class="daftar-resto">Your Liked Restaurants</h2>
      <div id="restaurants" class="content"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restauranstTitle = document.querySelector('#daftar-resto');
    const restaurantContainer = document.querySelector('#restaurants');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restauranstTitle.innerHTML = 'You do not have a favorite restaurant yet';
    }
  },
};

export default FavoriteRestaurans;
