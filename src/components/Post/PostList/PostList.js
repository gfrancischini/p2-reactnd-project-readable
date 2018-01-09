import React from 'react';
import { PostItem } from '../PostItem';


export const PostList = ({ posts, deletePost, votePost }) => {
    return (
        <section className="projects no-padding-top">
            <div className="container-fluid">
                {
                    posts.map(post => <PostItem votePost={votePost}
                        deletePost={deletePost} key={post.id} post={post} />)
                }
            </div>
        </section>
    )
}
