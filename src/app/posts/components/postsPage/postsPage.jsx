import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';
import Button from 'components/button';
import Loader from 'components/loader';

import PostList from '../postList';

import './postsPage.less';

// Demo posts
const posts = [];
for (let i = 1; i <= 5; ++i) {
    posts.push({
        id: i + '',
        title: `Post ${i}`,
        subtitle: `Subtitle ${i}`,
        author: `Author ${i}`,
        date: new Date()
    });
}

class PostsPage extends React.Component {

    render() {
        return ( 
            <BlogLayout className="posts-page">
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
                <PostList items={posts}/>
                <Button className="load-more">Load more</Button>
                {/*<Loader/>*/}
            </div>
        );
    }

}

export default PostsPage;