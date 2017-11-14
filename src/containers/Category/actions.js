import * as RestClientAPI from 'services/api/RestClientAdapter'

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
