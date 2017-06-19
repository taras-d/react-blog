import { combineReducers } from 'redux';

import postListReducer from './list';
import postDetailReducer from './detail';

export default combineReducers({
    list: postListReducer,
    detail: postDetailReducer
});