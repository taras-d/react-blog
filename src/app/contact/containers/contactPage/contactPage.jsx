import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import ContactForm from '../../components/contactForm';

import './contactPage.less';

class ContactPage extends React.Component {

    constructor() {
        super(...arguments);
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
                    <ContactForm onSubmit={this.onSubmit}/>
                </div>
            </BlogLayout>
        );
    }

    onSubmit(data) {
        console.log(data);
    }

}

export default ContactPage;