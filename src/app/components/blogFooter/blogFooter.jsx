import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SocialIcon from '../socialIcon';

import './blogFooter.less';

const propTypes = {
    className: PropTypes.string
};

const BlogFooter = ({ className }) => {
    className = classNames('blog-footer', className);
    return (
        <div className={className}>
            <SocialIcon name="facebook"/>
            <SocialIcon name="twitter"/>
            <SocialIcon name="github"/>
            <div className="copyright">
                {`Copyright © Blog ${fullYear}`}
            </div>
        </div>
    );
}

BlogFooter.propTypes = propTypes;

const fullYear = new Date().getFullYear();

export default BlogFooter;