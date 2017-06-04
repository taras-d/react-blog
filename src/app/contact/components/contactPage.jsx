import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './contactPage.less';

export default class ContactPage extends React.Component {

    render() {
        return (
            <BlogLayout>
                <div className="contact-page">
                    <IntroHeader
                        imageUrl="/assets/images/contact-bg.jpg"
                        title="Contact"
                        subtitle="Contact"
                    />
                    <div>Contact</div>
                </div>
            </BlogLayout>
        )
    }

}