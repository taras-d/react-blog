import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './root.less';

import { LandingPage } from '../landing';

const Root = () => {
    return (
        <Switch>
            <Route path="/" exact component={LandingPage}/>
            <Route render={() => <b>Page Not Found</b>}/>
        </Switch>
    );
}

export default Root;