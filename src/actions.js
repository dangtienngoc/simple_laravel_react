import api from './api';

export const ADD_SHIPPING           = 'ADD_TO_CART';
export const RECEIVED_SHIPPING      = 'RECEIVED_SHIPPING';
export const SHIPPING_PENDING       = 'SHIPPING_PENDING';
export const RECEIVED_POST_SHIPPING = 'RECEIVED_POST_SHIPPING';

const receiveShippongs = shippings => ({
    type: RECEIVED_SHIPPING,
    payload: shippings
})

const shippingPending = () => ({
    type: SHIPPING_PENDING
});

const receivePostShipping = data => ({
    type: RECEIVED_POST_SHIPPING,
    payload: data
})

/**
 * Action for get all shipping
 */
export const getAllShippings = () => dispatch => {
    api.getShippings().then(response => {
        dispatch(receiveShippongs(response.data));
    });
}

/**
 * Action for submit data
 */

export const submitData = (shipping) => dispatch => {

    dispatch(shippingPending());

    api.addShipping(shipping).then(response => {
        console.log(response);
        dispatch(receivePostShipping(response.data));
    });
}