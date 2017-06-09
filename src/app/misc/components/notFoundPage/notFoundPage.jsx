import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './notFoundPage.less';

class NotFoundPage extends React.Component {

    render() {
        return (
            <BlogLayout>
                <IntroHeader
                    title="Page Not Found"
                    imageUrl="/assets/images/about-bg.jpg"
                />
                <div>Page you are looking for has been removed or doesn't exist</div>
            </BlogLayout>
        );
    }

}

export default NotFoundPage;