import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import '../styles/main.less';

import store from './store';

import Root from './root';

render(
    <Provider store={store}>
        <Router>
            <Root/>
        </Router>
    </Provider>,
    document.getElementById('app-root')
);