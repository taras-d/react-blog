import React from 'react';
import { connect } from 'react-redux';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import ContactForm from '../../components/contactForm';

import { unsub } from 'api/utils';
import * as actions from '../../ducks/contact';

import './contactPage.less';

class ContactPage extends React.Component {

    constructor() {
        super(...arguments);

        this.formRef = null;
        this.feedbackSub = null;

        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <BlogLayout className="contact-page">
                <IntroHeader
                    bgImage="assets/images/contact-bg.jpg"
                    title="Contact"
                    subtitle="Contact"
                />
                <div className="page-content">
                    <p className="text-center">Leave feedback</p>
                    {this.renderMessage()}
                    {this.renderForm()}
                </div>
            </BlogLayout>
        );
    }

    renderMessage() {
        const message = this.props.contact.message;
        return message? <div className="contact-message">{message}</div>: null;
    }

    renderForm() {
        const contact = this.props.contact;
        return  <ContactForm 
            sending={contact.sending}
            reset={!!contact.message}
            onSubmit={this.onSubmit}/>
    }

    componentWillUnmount() {
        // Cancel request
        unsub(this.feedbackSub);

        // Reset store data
        const dispatch = this.props.dispatch;
        dispatch( actions.reset() );
    }

    onSubmit(data) {
        // Dispatch async action
        const dispatch = this.props.dispatch;
        this.feedbackSub = dispatch( actions.feedbackAsync(data) ).subscribe();
    }

}

const mapStateToProps = state => ({ contact: state.contact });

export default connect(mapStateToProps)(ContactPage);