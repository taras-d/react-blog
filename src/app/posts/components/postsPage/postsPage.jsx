import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './postsPage.less';

class PostsPage extends React.Component {

    render() {
        return ( 
            <BlogLayout>
                <IntroHeader
                    title="Blog"
                    subtitle="Blog"
                />
                {this.getContent()}
            </BlogLayout>
        );
    }

    getContent() {
        return (
            <div className="blog-layout-body">
                Posts list
            </div>
        );
    }

}

export default PostsPage;