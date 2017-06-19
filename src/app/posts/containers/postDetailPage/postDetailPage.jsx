import React from 'react';
import { connect } from 'react-redux';

import { unsub } from 'api/utils';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';
import PostDetail from '../../components/postDetail';

import * as actions from '../../ducks/detail';

import './postDetailPage.less';

class PostDetailPage extends React.Component {

    constructor() {
        super(...arguments);
        this.unlistenHistory = this.props.history.listen( this.historyChange.bind(this) );
        this.getSub = null;
    }

    render() {
        let { detail } = this.props;
        return (
            <BlogLayout className="post-detail-page">
                <PostDetail post={detail.data}/>
            </BlogLayout>
        )
    }
    
    componentDidMount() {
        this.getPost();
    }

    componentWillUnmount() {
        unsub(this.getSub);
        this.unlistenHistory();
        this.resetPost();
    }

    historyChange(location) {
        if (location.pathname.startsWith('/post/')) {
            this.getPost();
        }
    }

    getPost() {
        let { match, dispatch } = this.props;
        this.getSub = dispatch( actions.getPostAsync(match.params.id) ).subscribe();
    }

    resetPost() {
        this.props.dispatch( actions.reset() );
    }

}

export default connect( state => ({ detail: state.posts.detail }) )(PostDetailPage);