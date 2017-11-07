import * as RestClientAPI from '../services/api/RestClientAdapter'

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ORDER_POSTS_BY = "ORDER_POSTS_BY";

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const fetchPosts = () => dispatch => (
    RestClientAPI.getAll()
        .then(posts => dispatch(receivePosts(posts)))
);

export const orderPostsBy = orderBy => ({
    type: ORDER_POSTS_BY,
    orderBy
}) 