import { postFilterTabBarItems } from 'components/Post/constants'

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
                .reduce((posts, post) => (Object.assign(posts, { [post.id]: { ...post, authorAvatarUrl: "https://avatars.dicebear.com/v1/female/my self/80.png" } })), state.itemById || {});
            return {
                ...state,
                itemsById
            }
        default:
            return state
    }
}
