import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './aboutPage.less';

class AboutPage extends React.Component {

    render() {
        return (
            <BlogLayout>
                <IntroHeader 
                    imageUrl="/assets/images/about-bg.jpg"
                    title="About"
                    subtitle="About"
                />
                <div>About</div>
            </BlogLayout>
        )
    }

}

export default AboutPage;