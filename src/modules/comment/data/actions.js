import * as ActionType from './actionTypes';
import * as RestClientAPI from '../../../services/api/RestClientAdapter'

/**
* Action dispatched when new comments are received
* @param {*} comments 
*/
export const receiveComments = comments => ({
   type: ActionType.RECEIVE_COMMENTS,
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