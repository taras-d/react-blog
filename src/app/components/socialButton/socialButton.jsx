import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../button';

import './socialButton.less';

const propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    url: PropTypes.string
};

const SocialButton = ({ className, name, url }) => {
    className = classNames('social-button', className);
    return (
        <a className={className} href={url} target="_blank">
            <Button>
                <img src={`assets/images/social/${name}-32.png`}/>
            </Button>
        </a>
    );
}

SocialButton.propTypes = propTypes;

export default SocialButton;