import update from 'immutability-helper';

import { getService } from 'api/bottle';

const postsService = getService('PostsService');

// Actions

const REQUEST = '@posts/REQUEST';
const REQUEST_OK = '@posts/REQUEST_OK';
const REQUEST_FAIL = '@posts/REQUEST_FAIL';
const RESET = '@posts/RESET';


// Reducer

const defaultState = {
    data: [],
    page: 1,
    prev: null,
    next: null,
    loading: false,
    error: null
};

export default function reducer(state = defaultState, action) {

    const payload = action.payload;

    switch (action.type) {

        case REQUEST:
            return update(state, {
                loading: {$set: true},
                page: {$set: payload}
            });

        case REQUEST_OK: 
            return update(state, {
                data: {$push: payload.data},
                prev: {$set: payload.prev},
                next: {$set: payload.next},
                loading: {$set: false}
            });

        case REQUEST_FAIL:
            return update(state, {
                error: {$set: action.payload},
                loading: {$set: false}
            });

        case RESET:
            return defaultState;

        default:
            return state;
    }

}


// Action creators

export const request = page => ({ type: REQUEST, payload: page });
export const requestOk = data => ({ type: REQUEST_OK, payload: data });
export const requestFail = err => ({ type: REQUEST_FAIL, payload: err });

export const reset = () => ({ type: RESET, payload: null });

export const getPosts = page => {
    return dispatch => {
        dispatch( request(page) );
        return postsService.getPosts(page).do(
            data => dispatch( requestOk(data) ),
            err => dispatch( requestFail(err) )
        );
    }
}
