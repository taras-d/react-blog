import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './homePage.less';

export default class HomePage extends React.Component {

    render() {
        return ( 
            <BlogLayout>
                <IntroHeader
                    imageUrl="/assets/images/home-bg.jpg"
                    title="Blog"
                    subtitle="Blog"
                />
                <div>Home</div>
            </BlogLayout>
        );
    }

}