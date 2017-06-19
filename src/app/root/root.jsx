import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './root.less';

import { PostListPage, PostDetailPage } from '../posts';
import { ContactPage } from '../contact';
import { AboutPage, ErrorPage } from '../misc';

const Root = () => {
    return (
        <Switch>
            <Route path="/" exact component={PostListPage}/>
            <Route path="/post/:id" exact component={PostDetailPage}/>
            <Route path="/about" exact component={AboutPage}/>
            <Route path="/contact" exact component={ContactPage}/>
            <Route component={ErrorPage}/>
        </Switch>
    );
}

export default Root;