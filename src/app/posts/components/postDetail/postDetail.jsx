import React from 'react';
import PropTypes from 'prop-types';

import './postDetail.less';

const propTypes = {
    content: PropTypes.string
};

const PostDetail = ({ content }) => {
    return (
        <div className="post-detail">
            {content}
        </div>
    );
}

PostDetail.propTypes = propTypes;

export default PostDetail;