import ListRestaurans from '../views/pages/list-restaurant';
import FavoriteRestaurans from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': ListRestaurans, // default page
  '/list-restaurant': ListRestaurans,
  '/favorite': FavoriteRestaurans,
  '/detail/:id': Detail,
};

export default routes;
