import * as RestClientAPI from '../services/api/RestClientAdapter'

export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export const fetchPosts = () => dispatch => (
    RestClientAPI.getAll()
        .then(posts => dispatch(receivePosts(posts)))
);