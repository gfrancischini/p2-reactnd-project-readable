
const INITIAL_STATE = {
    itemsById: null
}

export const postReducer = (state = INITIAL_STATE, action) => {
    console.log(action.type)
    switch (action.type) {
        case "RECEIVE_POSTS":
            const itemsById = action.posts
                .reduce((posts, post) => (Object.assign(posts, { [post.id]: post })), state.itemById || {});
            return {
                ...state,
                itemsById
            }
        default:
            return state
    }
}

export const getPostById = (state, id) => {
    if (id == null) {
        return null;
    }

    //when there is no loaded post we should try to load the specific one
    if (state.post.itemsById == null) {
        return null;
    }



    return state.post.itemsById[id];
}