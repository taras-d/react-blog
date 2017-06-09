import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import BlogHeader from '../blogHeader';
import BlogFooter from '../blogFooter';

import './blogLayout.less';

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

const BlogLayout = ({ className, children }) => {
    className = classNames('blog-layout', className);
    return (
        <div className={className}>
            <BlogHeader/>
            {children}
            <BlogFooter/>
        </div>
    );
}

BlogLayout.propTypes = propTypes;

export default BlogLayout;