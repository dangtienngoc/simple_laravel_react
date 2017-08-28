import api from './api';

export const ADD_SHIPPING           = 'ADD_TO_CART';
export const RECEIVED_SHIPPING      = 'RECEIVED_SHIPPING';
export const SHIPPING_PENDING       = 'SHIPPING_PENDING';
export const RECEIVED_POST_SHIPPING = 'RECEIVED_POST_SHIPPING';

export const ADD_ERROR   = "ADD_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const addError = errors => ({
    type: ADD_ERROR,
    payload: errors
});

export const clearError = () => ({
    type: CLEAR_ERROR
});

export const receiveShippongs = shippings => ({
    type: RECEIVED_SHIPPING,
    payload: shippings
});

export const shippingPending = () => ({
    type: SHIPPING_PENDING
});

export const receivePostShipping = data => ({
    type: RECEIVED_POST_SHIPPING,
    payload: data
});

/**
 * Action for get all shipping
 */
export const getAllShippings = () => dispatch => {
    return api.getShippings().then(response => {
            return dispatch(receiveShippongs(response.data))
        }
    );
};

/**
 * Action for submit data
 */

export const submitData = (shipping) => dispatch => {
    dispatch(shippingPending());
    return api.addShipping(shipping).then(response => {
        return dispatch(receivePostShipping(response.data));
    });
}