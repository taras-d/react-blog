import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './aboutPage.less';

class AboutPage extends React.Component {

    render() {
        return (
            <BlogLayout className="about-page">
                <IntroHeader
                    imageUrl="/assets/images/about-bg.jpg"
                    title="About"
                    subtitle="About"
                />
                {this.getContent()}
            </BlogLayout>
        )
    }

    getContent() {
        return (
            <div className="blog-layout-content">
                About
            </div>
        );
    }

}

export default AboutPage;