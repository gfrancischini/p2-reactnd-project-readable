const INITIAL_STATE = {
    itemsById: null
}

export const commentReducer = (state = INITIAL_STATE, action) => {
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

