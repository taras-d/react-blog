import React from 'react';
import { connect } from 'react-redux';

import BlogLayout from 'components/blogLayout';

import PostDetail from '../../components/postDetail';

import * as actions from '../../ducks/postDetail';

import './postDetailPage.less';

class PostDetailPage extends React.Component {

    constructor() {
        super(...arguments);
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

    }

    getPost() {
        let { match, dispatch } = this.props;
        this.getSub = dispatch( actions.getPostAsync(match.params.id) ).subscribe();
    }

}

export default connect( state => ({ detail: state.posts.detail }) )(PostDetailPage);