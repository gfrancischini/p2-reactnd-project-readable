import * as RestClientAPI from '../services/api/RestClientAdapter'

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




/****************************************************************************** */

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

/**
 * Action dispatched when new comments are received
 * @param {*} comments 
 */
export const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

/**
 * Fetch all comments from a specif post
 * @param {*} id The id of the post to retrieve comments
 */
export const fetchComments = (id) => dispatch => (
    RestClientAPI.getAllCommentsFromPost(id).then(comments => dispatch(receiveComments(comments)))
)
