import update from 'immutability-helper';

import { getService } from 'api/bottle';

const postsService = getService('PostsService');

// Actions

const GET_POST      = 'posts/GET_POST';
const GET_POST_OK   = 'posts/GET_POST_OK';
const GET_POST_FAIL = 'posts/GET_POST_FAIL';
const RESET         = 'posts/RESET';

// Reducer

const initialState = {
    data: null,
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {

    switch (action.type) {

        case GET_POST:
            return update(state, {
                loading: {$set: true}
            });

        case GET_POST_OK:
            return update(state, {
                loading: {$set: false},
                data: {$set: action.payload}
            });

        case GET_POST_FAIL:
            return update(state, {
                loading: {$set: false},
                error: {$set: action.payload}
            });

        case RESET:
            return initialState;

        default:
            return initialState;

    }

}

// Actions

export const getPost = () => ({ type: GET_POST, payload: null });
export const getPostOk = data => ({ type: GET_POST_OK, payload: data });
export const getPostFail = err => ({ type: GET_POST_FAIL, payload: err });

export const getPostAsync = id => {
    return dispatch => {
        dispatch( getPost() );
        return postsService.getPost(id).do(
            data => dispatch( getPostOk(data) ),
            err => dispatch( getPostFail(err) )
        );
    }
}