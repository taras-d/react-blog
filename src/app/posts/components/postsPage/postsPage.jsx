import React from 'react';

import BlogLayout from 'components/blogLayout';
import IntroHeader from 'components/introHeader';
import Button from 'components/button';
import Loader from 'components/loader';

import PostList from '../postList';

import { postsService } from '../../api';

import './postsPage.less';

class PostsPage extends React.Component {

    constructor() {

        super(...arguments);

        this.state = {
            posts: [],
            loading: false
        };

        this.from = 0;
        this.perPage = 5;

        this.loadMore = this.loadMore.bind(this);
    } 

    render() {

        let { posts, loading } = this.state;

        return ( 
            <BlogLayout className="posts-page">
                <IntroHeader
                    title="Blog"
                    subtitle="Blog"
                />
                <div className="blog-layout-body">
                    <PostList items={posts}/>

                    {loading?
                        <div className="text-center">
                            <Loader/>
                        </div>:
                        <div className="text-center">
                            <Button onClick={this.loadMore}>Load More</Button>
                        </div>
                    }
                </div>
            </BlogLayout>
        );
    }

    componentDidMount() {
        this.getPosts();
    }

    loadMore() {
        this.from += this.perPage;
        this.getPosts();
    }

    getPosts() {
        let { from, perPage } = this;
        this.setState({ loading: true });
        postsService.getPosts(from, perPage).subscribe(res => {
            this.setState({
                posts: this.state.posts.concat(res),
                loading: false
            });
        });
    }

}

export default PostsPage;