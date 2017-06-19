import React from 'react';

import TextBox from 'components/textBox';
import Button from 'components/button';

import './contactForm.less';

export class ContactForm extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };

        this.fieldChange = this.fieldChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    render() {
        const state = this.state;
        return (
            <form className="contact-form" onSubmit={this.submit}>
                <TextBox name="name" 
                    placeholder="Name"
                    value={state.name}
                    onValueChange={this.fieldChange}/>
                <TextBox name="email" 
                    placeholder="Email Address"
                    value={state.email}
                    onValueChange={this.fieldChange}/>
                <TextBox name="phone" 
                    placeholder="Phone Number"
                    value={state.phone}
                    onValueChange={this.fieldChange}/>
                <TextBox name="message"
                    placeholder="Message"
                    multiline
                    value={state.message}
                    onValueChange={this.fieldChange}/>
                <div className="contact-send">
                    <Button>Send</Button>
                </div>
            </form>
        );
    }

    fieldChange(value, name, event) {
        this.setState({ [name]: value });
    }

    submit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

}

export default ContactForm;