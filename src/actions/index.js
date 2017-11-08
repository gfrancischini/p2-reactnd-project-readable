import * as RestClientAPI from '../services/api/RestClientAdapter'

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ORDER_POSTS_BY = "ORDER_POSTS_BY";

/**
 * Action dispatched when new posts are received
 * @param {*} posts 
 */
export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

/**
 * Fetch All Posts 
 */
export const fetchPosts = () => dispatch => (
    RestClientAPI.getAll()
        .then(posts => dispatch(receivePosts(posts)))
);

/**
 * Fetch a specific post by id
 * @param {*} id The id of the post to retrieve
 */
export const fetchPost = (id) => dispatch => (
    RestClientAPI.getPost(id).then(post => dispatch(receivePosts([post])))
)

export const orderPostsBy = orderBy => ({
    type: ORDER_POSTS_BY,
    orderBy
}) 