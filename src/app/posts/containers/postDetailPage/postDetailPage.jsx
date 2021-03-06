import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';
import Button from 'components/button';
import PostDetail from '../../components/postDetail';

import * as utils from 'api/utils';
import * as actions from '../../ducks/detail';

import './postDetailPage.less';

class PostDetailPage extends React.Component {

    constructor() {
        super(...arguments);

        this.getSub = null;
        this.unlistenHistory = this.props.history.listen( this.historyChange.bind(this) );
    }

    render() {
        let detail = this.props.detail;
        return (
            <BlogLayout className="post-detail-page">
                <PostDetail post={detail.data}/>
                {detail.data &&
                    <div className="back-to-list">
                        <NavLink to="/"><Button>Back to list</Button></NavLink>
                    </div>
                }
            </BlogLayout>
        )
    }
    
    componentDidMount() {
        utils.scrollTop();
        // Get post when component mounted
        this.getPost();
    }

    componentWillUnmount() {
        utils.unsub(this.getSub);
        this.unlistenHistory();
        this.resetPost();
    }

    historyChange(location) {
        if (location.pathname.startsWith('/post/')) {
            // Get post when id changed
            this.getPost();
        }
    }

    getPost() {
        // Dispatch async action
        let { match, dispatch } = this.props;
        this.getSub = dispatch( actions.getPostAsync(match.params.id) ).subscribe();
    }

    resetPost() {
        this.props.dispatch( actions.reset() );
    }

}

export default connect( state => ({ detail: state.posts.detail }) )(PostDetailPage);