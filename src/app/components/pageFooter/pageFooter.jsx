import React from 'react';

import SocialIcon from '../socialIcon';

import './pageFooter.less';

const PageFooter = () => {
    let copyright = `Copyright © Blog ${new Date().getFullYear()}`;
    return (
        <div className="page-footer">
            <SocialIcon name="facebook"/>
            <SocialIcon name="twitter"/>
            <SocialIcon name="github"/>
            <div className="copyright">{copyright}</div>
        </div>
    );
}

export default PageFooter;