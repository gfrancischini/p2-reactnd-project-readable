import React from 'react';
import { PostItem } from './PostItem';

export const PostList = ({ posts }) => {

    //TODO move this to a high order component: https://www.robinwieruch.de/gentle-introduction-higher-order-components/ 
    if (!posts) {
        return <h1><i><center>Loading posts</center></i></h1>
    }

    return (
        <section className="projects no-padding-top">
            <div className="container-fluid">
                {
                    posts.length ?
                        posts.map(post => <PostItem key={post.id} post={post} />)
                        :
                        <h1><i><center>There are no posts</center></i></h1>
                }
            </div>
        </section>
    )

}