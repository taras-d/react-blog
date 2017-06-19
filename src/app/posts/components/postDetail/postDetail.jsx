import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Loader from 'components/loader';

import './postDetail.less';

const propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.string,
        formatedDate: PropTypes.string,
        content: PropTypes.string
    })
};

const PostDetail = ({ post }) => {
    return (
        <div className="post-detail">
            <div className="post-intro">
                {post &&
                    <div className="post-intro-inner">
                        <div className="post-title">{post.title}</div>
                        <div className="post-subtitle">{post.subtitle}</div>
                        <div className="post-meta">
                            Posted by <Link to="/">{post.author}</Link> on {post.formatedDate}
                        </div>
                    </div>
                }
            </div>
            <div className="page-content">
                {post?
                    <div className="post-content" 
                        dangerouslySetInnerHTML={{ __html: post.content }}>
                    </div>:
                    <div className="text-center">
                        <Loader/>
                    </div>
                }
            </div>
        </div>
    );
}

PostDetail.propTypes = propTypes;

export default PostDetail;