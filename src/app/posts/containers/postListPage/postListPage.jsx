import React from 'react';
import { connect } from 'react-redux';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';
import Button from 'components/button';
import Loader from 'components/loader';

import PostList from '../../components/postList';

import * as utils from 'api/utils';
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
        const list = this.props.list;

        // Restore scroll position
        utils.scrollTop(list.scroll);
        
        // Get posts if list is empty
        if (list.data.length === 0) {
            this.getPosts(list.page);
        }
    }

    componentWillUnmount() {

        // Save scroll position
        const dispatch = this.props.dispatch;
        dispatch( actions.saveScroll(window.scrollY) );

        // Unsubscribe request 
        utils.unsub(this.getSub);
    }

    loadMore() {
        // Get next page on load more
        this.getPosts( this.props.list.page + 1 );
    }

    getPosts(page) {
        // Dispatch async action
        const dispatch = this.props.dispatch;
        this.getSub = dispatch( actions.getPostsAsync(page) ).subscribe();
    }

}

export default connect( state => ({ list: state.posts.list }) )(PostListPage);