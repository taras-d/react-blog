import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';

import PostDetail from '../postDetail';

import './postPage.less';

class PostPage extends React.Component {

    render() {
        return (
            <BlogLayout className="post-page">
                <IntroHeader
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
            <div className="blog-layout-body">
                <PostDetail content={'Post content'}/>
            </div>
        );
    }

}

export default PostPage;