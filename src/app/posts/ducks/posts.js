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
    more: true,
    loading: false,
    error: null
};

export default function reducer(state = defaultState, action) {

    switch (action.type) {

        case REQUEST:
            return Object.assign({}, state, {
                loading: true,
                error: null,
            });

        case REQUEST_OK:
            return {
                data: state.data.concat(action.payload.data),
                more: action.payload.more,
                loading: false,
                error: null
            };

        case REQUEST_FAIL:
            return {
                data: [],
                more: false,
                loading: false,
                error: action.payload
            };

        case RESET:
            return defaultState;

        default:
            return state;
    }

}


// Action creators

export const request = from => ({ type: REQUEST, payload: from });
export const requestOk = data => ({ type: REQUEST_OK, payload: data });
export const requestFail = err => ({ type: REQUEST_FAIL, payload: err });

export const reset = () => ({ type: RESET, payload: null });

export const getPosts = (from) => {
    return dispatch => {
        dispatch( request() );
        return postsService.getPosts(from).do(
            data => dispatch( requestOk(data) ),
            err => dispatch( requestFail(err) )
        );
    }
}
