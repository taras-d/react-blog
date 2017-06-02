import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './root.less';

import PageLayout from '../components/pageLayout';

const Root = () => {
    return (
        <div className="root">
            <PageLayout>
                HOME
            </PageLayout>
        </div>
    );
}

export default Root;