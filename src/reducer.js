import { RECEIVED_SHIPPING, SHIPPING_PENDING, RECEIVED_POST_SHIPPING } from './actions';

const initState = {
    pending: false,
    shipping_list: [],
    shipping: {
        errors: {}
    },
    message: ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case SHIPPING_PENDING:
            return {
                ...state,
                pending: true
            };

        case RECEIVED_SHIPPING:
            return {
                ...state,
                shipping_list: action.payload,
                pending: false
            };
        case RECEIVED_POST_SHIPPING:
            return {
                ...state,
                shipping: action.payload,
                pending: false
            };
        default:
            return state;
    }
}

export default reducer;