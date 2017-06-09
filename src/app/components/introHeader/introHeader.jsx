import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './introHeader.less';

const propTypes = {
    className: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
};

const IntroHeader = ({ className, imageUrl, title, subtitle }) => {

    className = classNames('intro-header', className);

    const bgImg = `url(${imageUrl})`;

    return (
        <div className={className} style={{ backgroundImage: bgImg }}>
            <div className="intro-title">{title}</div>
            {subtitle &&
                <div>
                    <div className="intro-line"></div>
                    <div className="intro-subtitle">{subtitle}</div>
                </div>
            }
        </div>
    )
}

IntroHeader.propTypes = propTypes;

export default IntroHeader;