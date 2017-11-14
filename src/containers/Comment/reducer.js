const INITIAL_STATE = {
    itemsById: null
}

/**
 * Comment Reducer
 * @param {*} state 
 * @param {*} action 
 */
export const comment = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "RECEIVE_COMMENTS":
            const itemsById = action.comments
                .reduce((comments, comment) => (Object.assign(comments, { [comment.id]: comment })), state.itemsById || {});
            return {
                ...state,
                itemsById
            }
        default:
            return state
    }
}

