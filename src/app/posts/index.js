import { combineReducers } from 'redux';

import PostListPage from './containers/postListPage';
import PostDetailPage from './containers/postDetailPage';

import reducer from './ducks';

export {
    PostListPage,
    PostDetailPage,
    reducer
}