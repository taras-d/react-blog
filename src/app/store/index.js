import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import { postsReducer } from '../posts';

// Root reducer
const reducer = combineReducers({
    posts: postsReducer
});

// Enhancer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
const store = createStore(
    reducer, 
    composeEnhancers(
        applyMiddleware(ReduxThunk)
    )
);

export default store;