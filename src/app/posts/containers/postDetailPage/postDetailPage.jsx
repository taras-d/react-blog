import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';

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
        let detail = this.props.detail;
        return (
            <BlogLayout className="post-detail-page">
                <PostDetail post={detail.data}/>
            </BlogLayout>
        )
    }

    componentWillReceiveProps(newProps) {
        let detail = newProps.detail;
        if (detail.error) {
            this.props.history.push({
                pathname: '/error',
                search: queryString.stringify({ reason: detail.error.message })
            });
        }
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