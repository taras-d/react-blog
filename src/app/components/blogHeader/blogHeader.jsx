import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './blogHeader.less';

const propTypes = {
    className: PropTypes.string
};

const BlogHeader = ({ className }) => {
    className = classNames('blog-header', className);
    return (
        <div className={className}>
            <div className="header-logo">
                <NavLink to="/" exact>Blog</NavLink>
            </div>
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
}

BlogHeader.propTypes = propTypes;

export default BlogHeader;