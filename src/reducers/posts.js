const INITIAL_STATE = {
    itemsById : null,
    orderBy: "Newest"
}

export const posts = (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case "RECEIVE_POSTS":
            const itemsById = action.posts
                .reduce((posts, post) => (Object.assign(posts, {[post.id]: post})), {});
            return {
                ...state,
                itemsById
            } 
        default:
            return state
    }
}

/**
 * Filter the post items
 * @param {*} state 
 * @param {*} orderBy 
 */
export const getFilteredPosts = (state, orderBy) => {
    //when there is no loaded post we should return null
    if(state.posts.itemsById == null) {
        return null;
    }

    // filter the posts creating a array of filtered posts items
    let posts = Object.values(state.posts.itemsById).filter((post) => {
        return true;
    });

    //posts = orderBy(posts);

    return posts;
}

export default posts;

