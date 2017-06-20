import React from 'react';
import { connect } from 'react-redux';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';
import Button from 'components/button';
import Loader from 'components/loader';

import PostList from '../../components/postList';

import { unsub } from 'api/utils';

import * as actions from '../../ducks/list';

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
                {list.next &&
                    <div className="load-more">
                        {list.loading? 
                            <Loader/>: 
                            <Button onClick={this.loadMore}>Load more</Button>
                        }
                    </div>
                }
            </div>
        );
    }

    componentDidMount() {
        this.getPosts( this.props.list.page );
    }

    componentWillUnmount() {
        unsub(this.getSub);
        this.resetPosts();
    }

    loadMore() {
        this.getPosts( this.props.list.page + 1 );
    }

    getPosts(page) {
        let { dispatch } = this.props;
        this.getSub = dispatch( actions.getPostsAsync(page) ).subscribe();
    }

    resetPosts() {
        this.props.dispatch( actions.reset() );
    }

}

export default connect( state => ({ list: state.posts.list }) )(PostListPage);