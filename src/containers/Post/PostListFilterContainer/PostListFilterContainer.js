import React, { Component } from 'react';
import { PostList, PostFilter } from 'components/Post';
import { fetchPosts, votePost, deletePost } from '../actions'
import { connect } from 'react-redux'
import { getFilteredPosts } from '../selectors'
import queryString from 'query-string';
import { withRouter } from 'react-router-dom'

class PostListFilterContainer1 extends Component {

    componentDidMount = () => {
        //retrive all posts from server
        this.props.loadPosts();
    }

    handleSelectedChange = (selectedId) => {
        const parsed = queryString.parse(this.props.location.search);
        const search = queryString.stringify({ ...parsed, sort: selectedId });
        //update the browser url
        this.props.history.push({
            pathname: this.props.location.pathname,
            search
        });
    }

    handlePostVote = (post, option) => {
        this.props.votePost(post.id, option);
    }

    handlePostDelete = (post) => {
        console.log("handlePostDelete");
        this.props.deletePost(post).then(() => {
            this.props.history.push(`/`);
        })
    }

    render() {
        const { posts, sort } = this.props;

        //TODO move this to a high order component: https://www.robinwieruch.de/gentle-introduction-higher-order-components/ 
        if (!posts) {
            return <h1><i>Loading posts</i></h1>
        }
        const Posts = posts.length ? <PostList votePost={this.handlePostVote}
            deletePost={this.handlePostDelete} posts={posts} /> : <h1><i>There are no posts</i></h1>;

        return (
            <div className="tabs-warp question-tab">
                <PostFilter selectedId={sort} handleSelectedChange={this.handleSelectedChange} />
                <div className="tab-inner-warp">
                    <div className="tab-inner">
                        {Posts}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, { location, history, match }) => {
    const params = new URLSearchParams(location.search);
    const sort = params.get('sort') ? params.get('sort') : 'Newest';
    const category = match.params.category;

    return {
        posts: getFilteredPosts(state, category, sort),
        sort,
        category,
        location,
        history
    }
}

export const PostListFilterContainer = withRouter(connect(mapStateToProps, {
    loadPosts: fetchPosts,
    votePost: votePost,
    deletePost: deletePost
})(PostListFilterContainer1))