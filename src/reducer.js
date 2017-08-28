import { RECEIVED_SHIPPING, SHIPPING_PENDING, RECEIVED_POST_SHIPPING, ADD_ERROR, CLEAR_ERROR } from './actions';

const initState = {
    pending: false,
    shipping_list: [],
    shipping: {
        errors: {},
        id: 0
    }
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
                shipping: {
                    ...state.shipping,
                    ...action.payload
                },
                pending: false
            };
        case ADD_ERROR:
            const errors = action.payload;
            return {
                ...state,
                shipping: {
                    errors: {
                        ...errors
                    },
                    id: 0
                }
            };

        case CLEAR_ERROR:
            return {
                ...state,
                shipping: {
                    errors: {},
                    id: 0
                }
            };

        default:
            return state;
    }
}

export default reducer;