import { combineReducers } from 'redux';

import postListReducer from './postList';
import postDetailReducer from './postDetail';

export default combineReducers({
    list: postListReducer,
    detail: postDetailReducer
});