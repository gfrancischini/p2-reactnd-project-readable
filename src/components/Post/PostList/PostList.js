import React, { Component } from 'react';
import { PostItem } from '../PostItem';
import { PostDetailContainer } from 'containers/Post'
export class PostList extends Component {
    render() {
        return (
            <section className="projects no-padding-top">
                <div className="container-fluid">
                    {
                        this.props.posts.map(post => <PostItem votePost={this.props.votePost}
                            deletePost={this.props.deletePost} key={post.id} post={post} />)
                    }
                </div>
            </section>
        )
    }
}