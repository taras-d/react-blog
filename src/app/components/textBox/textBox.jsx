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
    minLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
    minLength: 0,
    maxLength: 200,
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
        minLength, maxLength, error, value, onValueChange } = this.props;

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
                        minLength={minLength}
                        maxLength={maxLength}
                        value={value} 
                        onChange={this.valueChange}/>:
                    <input className="textbox-input"
                        name={name}
                        type={password? 'password': 'text'}
                        placeholder={placeholder}
                        disabled={disabled}
                        minLength={minLength}
                        maxLength={maxLength}
                        value={value}
                        onChange={this.valueChange}/>
                }
                {error &&
                    <div className="textbox-error">{error}</div>}
            </div>
        );
    }

    componentDidUpdate(prevProps) {
        const value = this.props.value;
        if (value !== prevProps.value) {
            const labelRef = this.labelRef;
            if (value && !labelRef.classList.contains('fadein')) {
                labelRef.classList.add('fadein');
            } else if (!value) {
                labelRef.classList.remove('fadein');
            }
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