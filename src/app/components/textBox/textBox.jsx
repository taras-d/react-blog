import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './textBox.less';

const propTypes = {
    name: PropTypes.string,
    multiline: PropTypes.bool,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    password: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.node,
    value: PropTypes.string,
    onValueChange: PropTypes.func
};

const defaultProps = {
    name: '',
    multiline: false,
    placeholder: '',
    className: '',
    password: false,
    disabled: false,
    error: null,
    value: '',
    onValueChange: () => {}
};

class TextBox extends React.Component {

    constructor() {
        super(...arguments);
        this.valueChange = this.valueChange.bind(this);
    }
    
    render() {

        let { name, multiline, placeholder, className, password, disabled,
        error, value, onValueChange } = this.props;

        className = classNames('textbox', className, { error, disabled });

        return (
            <div className={className}>
                {placeholder &&
                    <div className="textbox-label"
                        ref={el => this.labelRef = el}>
                        {placeholder}
                    </div>
                }
                {multiline?
                    <textarea className="textbox-input"
                        name={name}
                        placeholder={placeholder} 
                        disabled={disabled}
                        value={value} 
                        onChange={this.valueChange}/>:
                    <input className="textbox-input"
                        name={name}
                        type={password? 'password': 'text'}
                        placeholder={placeholder}
                        disabled={disabled}
                        value={value}
                        onChange={this.valueChange}/>
                }
                {error &&
                    <div className="textbox-error">{error}</div>}
            </div>
        );
    }

    componentDidUpdate() {
        if (this.labelRef) {
            this.labelRef.classList.toggle('fadein', this.props.value);
        }
    }

    valueChange(event) {
        const target = event.target;
        this.props.onValueChange(target.value || '', target.name, event);
    }
}

TextBox.propTypes = propTypes;
TextBox.defaultProps = defaultProps;

export default TextBox;