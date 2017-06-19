import React from 'react';
import queryString from 'query-string';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './errorPage.less';

const ErrorPage = ({ location }) => {

    let params = queryString.parse(location.search),
        reason = params['reason'] || "Page you are looking for doesn't exist or has been removed";

    return (
        <BlogLayout className="error-page">
            <IntroHeader
                title="Oops!"
                subtitle="An Error Occurred"
                imageUrl="/assets/images/about-bg.jpg"
            />
            <div className="page-content text-center">
                {reason}
            </div>
        </BlogLayout>
    );
}

export default ErrorPage;