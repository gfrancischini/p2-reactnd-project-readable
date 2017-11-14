//As for action creators, not much changes from the usual Redux application.

// todos/actions.js
import * as ActionType from './actionTypes';
import * as RestClientAPI from '../../../services/api/RestClientAdapter'

/**
 * Action dispatched when new posts are received
 * @param {*} posts 
 */
export const receivePosts = posts => ({
    type: ActionType.RECEIVE_POSTS,
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
 * @param {*} post 
 */
export const updatePost = (post) => dispatch => (
    RestClientAPI.updatePost(post).then(post => dispatch(receivePosts([post])))
)

/**
 * 
 * @param {*} id 
 * @param {*} option 
 */
export const votePost = (id, option) => dispatch => (
    RestClientAPI.votePost(id, option).then(post => dispatch(receivePosts([post])))
)