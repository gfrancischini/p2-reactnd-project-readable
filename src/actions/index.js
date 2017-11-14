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

export const createPost = (newPost) => dispatch => (
    RestClientAPI.addPost(newPost).then(post => dispatch(receivePosts([post])))
)

export const updatePost = (post) => dispatch => (
    RestClientAPI.updatePost(post).then(post => dispatch(receivePosts([post])))
)


export const votePost = (id, option) => dispatch => (
    RestClientAPI.votePost(id, option).then(post => dispatch(receivePosts([post])))
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
export const fetchComments = (postId) => dispatch => (
    RestClientAPI.getAllCommentsFromPost(postId).then(comments => dispatch(receiveComments(comments)))
)

export const fetchComment = (id) => dispatch => (
    RestClientAPI.getAllCommentsFromPost(id).then(comments => dispatch(receiveComments(comments)))
)

export const addComment = (comment) => dispatch => (
    RestClientAPI.addComment(comment).then(comment => dispatch(receiveComments([comment])))
)

export const updateComment = (comment) => dispatch => (
    RestClientAPI.updateComment(comment).then(comment => dispatch(receiveComments([comment])))
)

export const voteComment = (id, option) => dispatch => (
    RestClientAPI.voteComment(id, option).then(comment => dispatch(receiveComments([comment])))
)

/****************************************************************************** */


export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

/**
 * Action dispatched when new categories are received
 * @param {*} categories 
 */
export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
});

/**
 * Fetch all comments from a specif post
 * @param {*} id The id of the post to retrieve comments
 */
export const fetchCategories = () => dispatch => (
    RestClientAPI.getAllCategories().then(categories => dispatch(receiveCategories(categories)))
)
