import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button.less';

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

const defaultProps = {
    type: 'submit',
    disabled: false,
    onClick: () => {}
};

const Button = ({ type, disabled, className, children, onClick }) => {

    className = classNames('button', className);

    return (
        <button className={className} 
            type={type} 
            disabled={disabled}
            onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;