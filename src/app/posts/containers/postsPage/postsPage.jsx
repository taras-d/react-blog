import React from 'react';
import { connect } from 'react-redux';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';
import Button from 'components/button';
import Loader from 'components/loader';

import PostList from '../../components/postList';

import * as actions from '../../ducks/posts';

import './postsPage.less';

class PostsPage extends React.Component {

    constructor() {
        super(...arguments);

        this.from = 0;
        this.loadMore = this.loadMore.bind(this);
    } 

    render() {

        let { posts } = this.props;

        return ( 
            <BlogLayout className="posts-page">
                <IntroHeader
                    title="Blog"
                    subtitle="Blog"
                />
                <div className="blog-layout-body">
                    <PostList items={posts.data}/>
                    <div className="load-more">
                        {posts.loading && 
                            <Loader/>}
                        {(!posts.loading && posts.more) && 
                            <Button onClick={this.loadMore}>Load More</Button>}
                    </div>
                </div>
            </BlogLayout>
        );
    }

    componentDidMount() {
        this.getPosts();
    }

    componentWillUnmount() {
        this.resetPosts();
        if (this.getSub) {
            this.getSub.unsubscribe();
        }
    }

    loadMore() {
        this.from += 5;
        this.getPosts();
    }

    resetPosts() {
        let { dispatch } = this.props;
        dispatch( actions.reset() );
    }

    getPosts() {
        let { dispatch } = this.props;
        this.getSub = dispatch( actions.getPosts(this.from) ).subscribe();
    }

}

const mapStateToProps = state => {
    return { posts: state.posts };
}

export default connect(mapStateToProps)(PostsPage);