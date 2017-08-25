import axios from 'axios';

export default {
  getShippings: () => axios.get('http://boxinator.app/api/shipping'),
  addShipping: (shipping) => axios.post('http://boxinator.app/api/shipping', shipping)
}