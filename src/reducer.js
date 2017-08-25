
import { RECEIVED_SHIPPING } from './actions';

const initState = {
    shipping_list: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {

        case RECEIVED_SHIPPING:
            return {
            	...state,
            	shipping_list: action.payload
            };
        default:
            return state;
    }
}

export default reducer;