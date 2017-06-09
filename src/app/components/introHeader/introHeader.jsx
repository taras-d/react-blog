import React from 'react';
import PropTypes from 'prop-types';

import './introHeader.less';

const IntroHeader = ({ imageUrl, title, subtitle }) => {
    let style = { backgroundImage: `url(${imageUrl})`};
    return (
        <div className="intro-header" style={style}>
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

IntroHeader.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default IntroHeader;