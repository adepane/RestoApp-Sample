import API_ENDPOINT from '../globals/api-endpoint';

const TheRestaurantSource = {
  async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  },

  async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  },

  async sendReview(id, name, review) {
    const settings = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        name,
        review,
      }),
    };
    try {
      const fetchResponse = await fetch(API_ENDPOINT.POST_REVIEW, settings);
      const data = await fetchResponse.json();
      return data.customerReviews;
    } catch (error) {
      return error;
    }
  },
};

export default TheRestaurantSource;
