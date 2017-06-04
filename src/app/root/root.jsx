import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './root.less';

import { HomePage } from '../home';
import { AboutPage } from '../about';

const Root = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route render={() => <b>Page Not Found</b>}/>
        </Switch>
    );
}

export default Root;