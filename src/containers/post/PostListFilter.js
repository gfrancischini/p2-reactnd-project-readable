import React, { Component } from 'react';
import { PostList, PostFilter } from '../../components/post';
import { fetchPosts } from '../../actions'
import { connect } from 'react-redux'
import {getFilteredPosts} from '../../reducers/posts'
class PostListFilter extends Component {

    componentDidMount = () => {
        this.props.loadPosts();
    }

    handleSelectedChange = (selectedId) => {
        console.log("handleSelectedChange= " + selectedId);
    }

    render() {
        const { posts } = this.props;

        //TODO move this to a high order component: https://www.robinwieruch.de/gentle-introduction-higher-order-components/ 
        if (!posts) {
            return <h1><i>Loading posts</i></h1>
        }
        if (posts.length === 0) {
            return <h1><i>There are no posts</i></h1>
        }

        return (
            <div class="tabs-warp question-tab">
                <PostFilter selectedId="Newest" handleSelectedChange={this.handleSelectedChange} />
                <div class="tab-inner-warp">
                    <div class="tab-inner">
                        <PostList posts={posts} />
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    const {posts} = state;
    return {
        posts : getFilteredPosts(state)
    }
}

export default connect(mapStateToProps, {
    loadPosts: fetchPosts
})(PostListFilter)