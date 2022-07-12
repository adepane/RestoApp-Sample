import TheRestaurantSource from '../../data/restaurantdb-source';
import { createSkeletonRestaurantTemplate, createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurans = {
  async render() {
    return `
      <h2 tabindex="0" id="daftar-resto" class="daftar-resto">Daftar Restoran</h2>
      <div id="restaurants" class="content">
        ${createSkeletonRestaurantTemplate(20)}
      </div>
    `;
  },

  async afterRender() {
    const loader = document.querySelector('#loader');
    try {
      const restaurantContainer = document.querySelector('#restaurants');
      const restaurants = await TheRestaurantSource.listRestaurant();
      restaurantContainer.innerHTML = '';
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      const infoContainer = document.querySelector('#daftar-resto');
      infoContainer.innerHTML = 'We are trying to get data from our site, but you are curently offline, Please try again later';
      loader.remove();
    }
  },
};

export default ListRestaurans;
