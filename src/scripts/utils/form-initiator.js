import TheRestaurantSource from '../data/restaurantdb-source';
import { createCustomerReviewTemplate } from '../views/templates/template-creator';

const FormInitiator = {
  init({
    form, id, name, review,
  }) {
    form.addEventListener('submit', (event) => {
      this._sendReview(event, id, name, review);
    });
  },

  async _sendReview(event, id, name, review) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    const formContainer = document.querySelector('#customer-comment');
    try {
      const reviews = await TheRestaurantSource.sendReview(id, name.value, review.value);
      const reviewContainer = document.querySelector('#customer-review');
      reviewContainer.innerHTML = createCustomerReviewTemplate(reviews);
      formContainer.innerHTML = '<h3>Thanks for your review<h3>';
    } catch (error) {
      formContainer.innerHTML = '<h3>Sorry, Your network are offline<h3>';
    }
  },

};

export default FormInitiator;
