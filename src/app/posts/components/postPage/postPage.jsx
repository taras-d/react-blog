import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import './postPage.less';

class PostPage extends React.Component {

    render() {
        return (
            <BlogLayout className="post-page">
                <IntroHeader
                    imageUrl="/assets/images/home-bg.jpg"
                    title="Post"
                    subtitle="Post"
                />
                {this.getContent()}
            </BlogLayout>
        )
    }

    componentDidUpdate() {
        let { match } = this.props;
        console.log(match.params.id);
    }

    getContent() {
        return (
            <div className="blog-layout-content">
                Post
            </div>
        );
    }

}

export default PostPage;