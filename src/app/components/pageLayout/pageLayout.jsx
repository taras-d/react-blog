import React from 'react';

import PageHeader from '../pageHeader';
import PageFooter from '../pageFooter';

import './pageLayout.less';

const PageLayout = ({ children }) => {
    return (
        <div className="page-layout">
            <PageHeader/>
            {children}
            <PageFooter/>
        </div>
    );
}

export default PageLayout;