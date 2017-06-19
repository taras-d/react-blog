import React from 'react';
import { connect } from 'react-redux';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';
import Button from 'components/button';
import Loader from 'components/loader';

import PostList from '../../components/postList';

import { unsub } from 'api/utils';

import * as actions from '../../ducks/postList';

import './postListPage.less';

class PostListPage extends React.Component {

    constructor() {
        super(...arguments);
        this.getSub = null;
        this.loadMore = this.loadMore.bind(this);
    } 

    render() {
        return ( 
            <BlogLayout className="post-list-page">
                <IntroHeader title="Blog" subtitle="Blog"/>
                {this.renderContent()}
            </BlogLayout>
        );
    }

    renderContent() {
        let { list } = this.props;
        return (
            <div className="page-content">
                <PostList items={list.data}/>
                <div className="load-more">
                    {list.loading && <Loader/>}
                    {(!list.loading && list.next) && 
                        <Button onClick={this.loadMore}>Load More</Button>}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getPosts( this.props.list.page );
    }

    componentWillUnmount() {
        this.resetPosts();
        unsub(this.getSub);
    }

    loadMore() {
        this.getPosts( this.props.list.page + 1 );
    }

    getPosts(page) {
        let { dispatch } = this.props;
        this.getSub = dispatch( actions.getPostsAsync(page) ).subscribe();
    }

    resetPosts() {
        let { dispatch } = this.props;
        dispatch( actions.reset() );
    }

}

export default connect( state => ({ list: state.posts.list }) )(PostListPage);