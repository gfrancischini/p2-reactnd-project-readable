const INITIAL_STATE = {
    itemsById: null
}

/**
 * 
 */
export const posts = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "RECEIVE_POSTS":
            const itemsById = action.posts
                .reduce((posts, post) => (Object.assign(posts, { [post.id]: post })), state.itemsById || {});
            return {
                ...state,
                itemsById
            }
        default:
            return state
    }
}
