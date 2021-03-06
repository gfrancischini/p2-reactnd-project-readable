import * as RestClientAPI from 'services/api/RestClientAdapter'

export const RECEIVE_POSTS = "RECEIVE_POSTS";

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

/**
 * 
 */
export const createPost = (newPost) => dispatch => (
    RestClientAPI.addPost(newPost).then(post => dispatch(receivePosts([post])))
)

/**
 * 
 */
export const updatePost = (post) => dispatch => (
    RestClientAPI.updatePost(post).then(post => dispatch(receivePosts([post])))
)

/**
 * 
 */
export const votePost = (id, option) => dispatch => (
    RestClientAPI.votePost(id, option).then(post => dispatch(receivePosts([post])))
)

export const deletePost = (post) => dispatch => (
    RestClientAPI.deletePost(post.id).then(post => dispatch(receivePosts([post])))
)