import api from './api';

export const ADD_SHIPPING = 'ADD_TO_CART';
export const RECEIVED_SHIPPING = 'RECEIVED_SHIPPING';

const receiveShippongs = shippings => ({
  type: RECEIVED_SHIPPING,
  payload: shippings
})

export const getAllShippings = () => dispatch => {
	api.getShippings().then(response => {
		dispatch(receiveShippongs(response.data));
	});
}