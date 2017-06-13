import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './loader.less';

const propTypes = {
    className: PropTypes.string
};

const Loader = ({ className }) => {
    className = classNames('loader', className);
    return (
        <div className={className}>
            <div className="loader-spinner"></div>
        </div>
    );
}

Loader.propTypes = propTypes;

export default Loader;