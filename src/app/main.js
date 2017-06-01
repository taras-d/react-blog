import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import '../styles/styles.less';

import Root from './root';

render(
    <Router>
        <Root/>
    </Router>,
    document.getElementById('app-root')
);