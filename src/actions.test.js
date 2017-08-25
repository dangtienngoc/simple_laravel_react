
import * as actions from './actions';

describe('actions', () => {
    it('should create an action to received data', () => {
        const shippings = [
            {id: 1, name: 'test'}
        ];
        const expectedAction = {
            type: actions.RECEIVED_SHIPPING,
            payload: shippings
        };
        expect(actions.receiveShippongs(shippings)).toEqual(expectedAction)
    })
});