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
            <div className="container-fluid">
                <div className="col-sm-6 left">
                    <NavLink to="/" exact>Blog</NavLink>
                </div>
                <div className="col-sm-6 right">
                    <NavLink to="/" exact>Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </div>
        </div>
    );
}

BlogHeader.propTypes = propTypes;

export default BlogHeader;