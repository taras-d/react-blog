import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './postList.less';

const propTypes = {
    className: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.string
    }))
};

const defaultProps = {
    posts: []
};

const PostList = ({ className, items }) => {

    className = classNames('post-list', className);

    items = items.map(post => {

        const url = `/post/${post.id}`;

        return (
            <div className="post-list-item" key={post.id}>
                <Link to={url} className="post-link">
                    <div className="post-title">{post.title}</div>
                    <div className="post-subtitle">{post.subtitle}</div>
                </Link>
                <div className="post-meta">
                    Posted by <Link to="/">{post.author}</Link> on {post.date}
                </div>
            </div>
        );
    });

    return (
        <div className={className}>{items}</div>
    );
}

PostList.propTypes = propTypes;
PostList.defaultProps = defaultProps;

export default PostList;