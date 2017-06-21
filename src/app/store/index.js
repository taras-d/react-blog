import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import { reducer as postsReducer } from '../posts';

// Root reducer
const reducer = combineReducers({
    posts: postsReducer
});

// Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(
    applyMiddleware(ReduxThunk)
);

// Create store
const store = createStore(reducer, middleware);

export default store;