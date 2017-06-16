import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './notFoundPage.less';

class NotFoundPage extends React.Component {

    render() {
        return (
            <BlogLayout className="not-found-page">
                <IntroHeader
                    title="Page Not Found"
                    imageUrl="/assets/images/about-bg.jpg"
                />
                {this.getContent()}
            </BlogLayout>
        );
    }

    getContent() {
        return (
            <div className="page-content text-center">
                Page you are looking for doesn't exist or has been removed
            </div>
        );
    }

}

export default NotFoundPage;