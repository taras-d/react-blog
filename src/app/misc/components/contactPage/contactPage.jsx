import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './contactPage.less';

class ContactPage extends React.Component {

    render() {
        return (
            <BlogLayout className="contact-page">
                <IntroHeader
                    bgImage="/assets/images/contact-bg.jpg"
                    title="Contact"
                    subtitle="Contact"
                />
                {this.getContent()}
            </BlogLayout>
        )
    }

    getContent() {
        return (
            <div className="blog-layout-body">
                Contact
            </div>
        );
    }

}

export default ContactPage;