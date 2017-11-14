
/**
 * 
 * @param {*} state 
 * @param {*} parentId 
 */
export const getCommentsByParentId = (state, parentId) => {
    if (parentId == null) {
        return null;
    }

    //when there is no loaded post we should try to load the specific one
    if (state.comment.itemsById == null) {
        return null;
    }

    // filter the comment creating a array of filtered comment items
    const comments = Object.values(state.comment.itemsById).filter((comment) => {
        return comment.parentId === parentId
    });

    return comments;
}

/**
 * 
 * @param {*} state 
 * @param {*} id 
 */
export const getCommentById = (state, id) => {
    if (id == null) {
        return null;
    }

    //when there is no loaded post we should try to load the specific one
    if (state.comment.itemsById == null) {
        return null;
    }

    return state.comment.itemsById[id];
}