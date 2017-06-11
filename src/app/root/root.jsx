import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './root.less';

import { PostsPage } from '../posts';
import { AboutPage, ContactPage, NotFoundPage } from '../misc';

const Root = () => {
    return (
        <Switch>
            <Route path="/" exact component={PostsPage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/contact" exact component={ContactPage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    );
}

export default Root;