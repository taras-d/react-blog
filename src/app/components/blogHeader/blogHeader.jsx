import React from 'react';
import { NavLink } from 'react-router-dom';

import './blogHeader.less';

const BlogHeader = () => {
    return (
        <div className="blog-header">
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

export default BlogHeader;