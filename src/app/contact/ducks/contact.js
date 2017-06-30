import update from 'immutability-helper';

import { getService } from 'api/bottle';

const contactService = getService('ContactService');

// Actions

const FEEDBACK      = 'contact/FEEDBACK';
const FEEDBACK_OK   = 'contact/FEEDBACK_OK';
const FEEDBACK_FAIL = 'contact/FEEDBACK_FAIL';
const RESET         = 'contact/RESET';

// Reducer

const initialState = {
    sending: false,
    message: '',
    error: null
};

export default function reducer(state = initialState, action) {

    const payload = action.payload;

    switch (action.type) {

        case FEEDBACK:
            return update(state, {
                sending: {$set: true},
                message: {$set: ''}
            });

        case FEEDBACK_OK:
            return update(state, {
                sending: {$set: false},
                message: {$set: payload.message}
            });

        case FEEDBACK_FAIL:
            return update(state, {
                sending: {$set: false},
                error: {$set: payload}
            });

        case RESET:
            return initialState;

        default:
            return state;

    }

}

// Actions

export const feedback = () => ({ type: FEEDBACK });
export const feedbackOk = res => ({ type: FEEDBACK_OK, payload: res });
export const feedbackFail = res => ({ type: FEEDBACK_FAIL, payload: res });

export const feedbackAsync = data => {
    return dispatch => {
        dispatch( feedback() );
        return contactService.feedback(data).do(
            res => dispatch( feedbackOk(res) ),
            err => dispatch( feedbackFail(err) )
        );
    }
}

export const reset = () => ({ type: RESET });