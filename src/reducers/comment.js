const INITIAL_STATE = {
    itemsById : null
}

export const comment = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "RECEIVE_COMMENTS":
            const itemsById = action.comments
                .reduce((comments, comment) => (Object.assign(comments, {[comment.id]: comment})), state.itemsById || {});
            return {
                ...state,
                itemsById
            } 
        default:
            return state
    }
}


export const getCommentsByParentId = (state, parentId) => {
    if(parentId == null) {
        return null;
    }

    //when there is no loaded post we should try to load the specific one
    if(state.comment.itemsById == null) {
        return null;
    }

    // filter the comment creating a array of filtered comment items
    const comments = Object.values(state.comment.itemsById).filter((comment) => {
        return comment.parentId === parentId
    });
    
    return comments;
}

export const getCommentById = (state, id) => {
    if(id == null) {
        return null;
    }

    //when there is no loaded post we should try to load the specific one
    if(state.comment.itemsById == null) {
        return null;
    }

    return state.comment.itemsById[id];
}