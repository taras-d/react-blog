import update from 'immutability-helper';

import { getService } from 'api/bottle';

const postsService = getService('PostsService');

// Actions

const GET_POSTS =      'posts/GET_POSTS';
const GET_POSTS_OK =   'posts/GET_POSTS_OK';
const GET_POSTS_FAIL = 'posts/GET_POSTS_FAIL';
const SAVE_SCROLL    = 'posts/SAVE_SCROLL';


// Reducer

const defaultState = {
    data: [],
    page: 1,
    prev: null,
    next: true,
    loading: false,
    error: null,
    scroll: 0
};

export default function reducer(state = defaultState, action) {

    const payload = action.payload;

    switch (action.type) {

        case GET_POSTS:
            return update(state, {
                loading: {$set: true},
                page: {$set: payload}
            });

        case GET_POSTS_OK: 
            return update(state, {
                data: {$push: payload.data},
                prev: {$set: payload.prev},
                next: {$set: payload.next},
                loading: {$set: false}
            });

        case GET_POSTS_FAIL:
            return update(state, {
                error: {$set: payload},
                loading: {$set: false}
            });

        case SAVE_SCROLL:
            return update(state, {
                scroll: {$set: payload}
            });

        default:
            return state;
    }

}


// Action creators

export const getPosts = page => ({ type: GET_POSTS, payload: page });
export const getPostsOk = data => ({ type: GET_POSTS_OK, payload: data });
export const getPostsFail = err => ({ type: GET_POSTS_FAIL, payload: err });

export const getPostsAsync = page => {
    return dispatch => {
        dispatch( getPosts(page) );
        return postsService.getPosts(page).do(
            data => dispatch( getPostsOk(data) ),
            err => dispatch( getPostsFail(err) )
        );
    }
}

export const saveScroll = val => ({ type: SAVE_SCROLL, payload: val });