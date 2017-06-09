import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './socialIcon.less';

const propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
    target: PropTypes.string
};

const defaultProps = {
    target: '_blank'
};

class SocialIcon extends React.Component {

    constructor() {
        super(...arguments);
        this.onClick = this.onClick.bind(this);
    }

    render() {

        let { className, name, link, target } = this.props;
        className = classNames('social-icon', className);

        const imageUrl = `assets/images/social/${name}-48.png`;

        return (
            <a className="social-icon" 
                href={link} 
                target={target}
                onClick={this.onClick}>
                <img src={imageUrl} alt={name}/>
            </a>
        )
    }

    onClick(event) {
        if (!this.props.link) {
            event.preventDefault();
        }
    }

}

SocialIcon.propTypes = propTypes;
SocialIcon.defaultProps = defaultProps;

export default SocialIcon;