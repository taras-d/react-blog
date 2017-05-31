import React from 'react';
import PropTypes from 'prop-types';

import './socialIcon.less';

const SocialIcon = ({ name, link, target }) => {
    const imageUrl = `assets/images/social/${name}-48.png`;
    return (
        <a className="social-icon" 
            href={link} 
            target={target}
            onClick={e => !link && e.preventDefault()}
        >
            <img src={imageUrl} alt={name}/>
        </a>
    )
};

SocialIcon.defaultProps = {
    target: '_blank'
};

SocialIcon.propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    target: PropTypes.string
};

export default SocialIcon;