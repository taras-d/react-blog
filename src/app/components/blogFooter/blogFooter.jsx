import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SocialButton from '../socialButton';

import './blogFooter.less';

const propTypes = {
    className: PropTypes.string
};

const BlogFooter = ({ className }) => {
    className = classNames('blog-footer', className);
    return (
        <div className={className}>
            <SocialButton name="facebook" url="https://www.facebook.com"/>
            <SocialButton name="twitter" url="https://twitter.com"/>
            <SocialButton name="github" url="https://github.com"/>
            <div className="copyright">
                {`Copyright © Blog ${fullYear}`}
            </div>
        </div>
    );
}

BlogFooter.propTypes = propTypes;

const fullYear = new Date().getFullYear();

export default BlogFooter;