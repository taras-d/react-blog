import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './notFoundPage.less';

const NotFoundPage = () => {
    return (
        <BlogLayout className="not-found-page">
            <IntroHeader
                title="Page Not Found"
                imageUrl="/assets/images/about-bg.jpg"
            />
            <div className="page-content text-center">
                Page you are looking for doesn't exist or has been removed
            </div>
        </BlogLayout>
    );
}

export default NotFoundPage;