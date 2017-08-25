import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as actions from './actions';

const middlewares = [thunk];
const mockStore   = configureMockStore(middlewares);

// test action
describe('actions', () => {
    it('should create an action to received data', () => {
        const shippings      = [
            {id: 1, name: 'test'}
        ];
        const expectedAction = {
            type: actions.RECEIVED_SHIPPING,
            payload: shippings
        };
        expect(actions.receiveShippongs(shippings)).toEqual(expectedAction)
    })
});

// test async actions
describe('async actions', () => {
    afterEach(() => {
        nock.cleanAll()
    });

    it('creates actions when fetching all shipping has been done', () => {

        nock('http://boxinator.app/api/')
            .get('/shipping')
            .reply(200, {payload: []});

        const expectedActions = [
            {type: actions.RECEIVED_SHIPPING, payload: []}
        ];

        const store = mockStore({todos: []});

        return store.dispatch(actions.getAllShippings()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });

    });
});