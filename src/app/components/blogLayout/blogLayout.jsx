import React from 'react';

import BlogHeader from '../blogHeader';
import BlogFooter from '../blogFooter';

import './blogLayout.less';

const BlogLayout = ({ children }) => {
    return (
        <div className="blog-layout">
            <BlogHeader/>
            {children}
            <BlogFooter/>
        </div>
    );
}

export default BlogLayout;