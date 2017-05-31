import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import './root.less';


import PageHeader from '../components/pageHeader';
import PageFooter from '../components/pageFooter';

const Root = () => {
    return (
        <div className="root">
            <PageHeader/>
            <PageFooter/>
        </div>
    );
}

export default Root;