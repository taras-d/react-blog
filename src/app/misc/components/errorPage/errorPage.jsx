import React from 'react';
import queryString from 'query-string';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './errorPage.less';

const ErrorPage = ({ location }) => {

    let params = queryString.parse(location.search),
        reason = "Page you are looking for doesn't exist or has been removed";

    if (params.status && params.statusText) {
        reason = `${params.status} ${params.statusText}`;
    }

    return (
        <BlogLayout className="error-page">
            <IntroHeader
                title="Oops!"
                subtitle={reason}
                imageUrl="assets/images/about-bg.jpg"
            />
        </BlogLayout>
    );
}

export default ErrorPage;