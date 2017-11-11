import React, { Component } from 'react';
import { PostItem } from './PostItem';

export class PostList extends Component {
    render() {
        return (
            <section className="projects no-padding-top">
                <div className="container-fluid">
                    {
                        this.props.posts.map(post => <PostItem key={post.id} post={post} />)
                    }
                </div>
            </section>
        )
    }
}