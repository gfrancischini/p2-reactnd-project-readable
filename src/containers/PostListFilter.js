import React, { Component } from 'react';
import { PostList } from '../components/post';
import { fetchPosts } from '../actions'
import { connect } from 'react-redux'

class PostListFilter extends Component {

    componentDidMount = () => {
        console.log("componentDidMount");
        this.props.loadPosts();
    }


    render() {
        const { posts } = this.props;
        if (!posts) {
            return <h1><i>Loading posts</i></h1>
        }

        return (
            <PostList posts={posts} />
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const {
      posts
    } = state

    return {
        posts
    }
}

export default connect(mapStateToProps, {
    loadPosts: fetchPosts
})(PostListFilter)