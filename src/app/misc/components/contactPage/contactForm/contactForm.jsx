import React from 'react';
import update from 'immutability-helper';
import validate from 'validate.js';

import TextBox from 'components/textBox';
import Button from 'components/button';

import './contactForm.less';

export class ContactForm extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            data: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            errors: null
        };

        this.rules = {
            name: { 
                presence: { message: 'Name is required' }
            },
            email: {
                email: { message: 'Invalid email address' }
            },
            message: {
                presence: { message: 'Message is required' }
            }
        };

        this.submitted = false;

        this.fieldChange = this.fieldChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    render() {

        const state = this.state,
            data = state.data,
            errors = state.errors || {};

        return (
            <form className="contact-form"
                autoComplete="off"
                noValidate
                onSubmit={this.submit}>
                <TextBox name="name" 
                    placeholder="Name"
                    value={data.name}
                    error={errors.name}
                    onValueChange={this.fieldChange}/>
                <TextBox name="email" 
                    placeholder="Email Address"
                    value={data.email}
                    error={errors.email}
                    onValueChange={this.fieldChange}/>
                <TextBox name="phone" 
                    placeholder="Phone Number"
                    value={data.phone}
                    onValueChange={this.fieldChange}/>
                <TextBox name="message"
                    placeholder="Message"
                    multiline
                    value={data.message}
                    error={errors.message}
                    onValueChange={this.fieldChange}/>
                <div className="contact-send">
                    <Button>Send</Button>
                </div>
            </form>
        );
    }

    fieldChange(value, name, event) {
        this.setState(update(this.state, {
            data: { [name]: {$set: value }}
        }), this.validate);
    }

    submit(event) {
        event.preventDefault();

        this.submitted = true;

        this.validate(() => {
            if (!this.state.errors) {
                this.props.onSubmit(this.state);
            }
        });
    }

    validate(callback) {

        if (!this.submitted) {
            return;
        }

        const errors = validate(this.state.data, this.rules, { fullMessages: false });
        for (let p in errors) {
            errors[p] = errors[p][0];
        }

        this.setState({ errors }, callback);
    }

}

export default ContactForm;