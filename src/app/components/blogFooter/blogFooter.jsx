import React from 'react';

import SocialIcon from '../socialIcon';

import './blogFooter.less';

const BlogFooter = () => {
    let copyright = `Copyright © Blog ${new Date().getFullYear()}`;
    return (
        <div className="blog-footer">
            <SocialIcon name="facebook"/>
            <SocialIcon name="twitter"/>
            <SocialIcon name="github"/>
            <div className="copyright">{copyright}</div>
        </div>
    );
}

export default BlogFooter;