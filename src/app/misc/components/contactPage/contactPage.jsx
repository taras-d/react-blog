import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';
import Modal from 'components/modal';

import ContactForm from './contactForm';

import { getService } from 'api/bottle';
import { unsub } from 'api/utils';

import './contactPage.less';

class ContactPage extends React.Component {

    constructor() {
        super(...arguments);

        this.contactService = getService('ContactService');

        this.state = {
            formStatus: 'done',
            message: ''
        };

        this.formRef = null;
        this.messageSub = null;

        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <BlogLayout className="contact-page">
                <IntroHeader
                    bgImage="/assets/images/contact-bg.jpg"
                    title="Contact"
                    subtitle="Contact"
                />
                <div className="page-content">
                    <p className="text-center">Feel free to contact me at any time</p>
                    {this.renderMessage()}
                    {this.renderForm()}
                </div>
            </BlogLayout>
        );
    }

    renderMessage() {
        const msg = this.state.message;
        return msg? <div className="contact-message">{msg}</div>: null;
    }

    renderForm() {
        return  <ContactForm onSubmit={this.onSubmit} status={this.state.formStatus}/>
    }

    componentWillUnmount() {
        unsub(this.messageSub);
    }

    onSubmit(data) {

        this.setState({ 
            formStatus: 'pending',
            message: ''
        });

        this.messageSub = this.contactService.sendMessage(data).subscribe(
            res => this.setState({ 
                formStatus: 'done', 
                message: res.message 
            })
        );
    }

}

export default ContactPage;