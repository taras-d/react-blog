import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './introHeader.less';

const propTypes = {
    className: PropTypes.string,
    bgImage: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
};

const defaultProps = {
    bgImage: '/assets/images/home-bg.jpg'
};

const IntroHeader = ({ className, bgImage, title, subtitle }) => {

    className = classNames('intro-header', className);

    return (
        <div className={className} style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="intro-title">{title}</div>
            {subtitle &&
                <div>
                    <div className="intro-divider"></div>
                    <div className="intro-subtitle">{subtitle}</div>
                </div>
            }
        </div>
    );
}

IntroHeader.propTypes = propTypes;
IntroHeader.defaultProps = defaultProps;

export default IntroHeader;