import React from 'react';
import { connect } from 'react-redux';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';
import Button from 'components/button';
import Loader from 'components/loader';

import PostList from '../../components/postList';

import { unsub } from 'api/utils';

import * as actions from '../../ducks/posts';

import './postsPage.less';

class PostsPage extends React.Component {

    constructor() {
        super(...arguments);
        this.getSub = null;
        this.loadMore = this.loadMore.bind(this);
    } 

    render() {
        return ( 
            <BlogLayout className="posts-page">
                <IntroHeader title="Blog" subtitle="Blog"/>
                {this.renderContent()}
            </BlogLayout>
        );
    }

    renderContent() {
        let { posts } = this.props;
        return (
            <div className="page-content">
                <PostList items={posts.data}/>
                <div className="text-center">
                    {posts.loading && <Loader/>}
                    {(!posts.loading && posts.next) && 
                        <Button onClick={this.loadMore}>Load More</Button>}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getPosts( this.props.posts.page );
    }

    componentWillUnmount() {
        this.resetPosts();
        unsub(this.getSub);
    }

    loadMore() {
        this.getPosts( this.props.posts.page + 1 );
    }

    getPosts(page) {
        let { dispatch } = this.props;
        this.getSub = dispatch( actions.getPosts(page) ).subscribe();
    }

    resetPosts() {
        let { dispatch } = this.props;
        dispatch( actions.reset() );
    }

}

const mapStateToProps = state => {
    return { posts: state.posts };
}

export default connect(mapStateToProps)(PostsPage);