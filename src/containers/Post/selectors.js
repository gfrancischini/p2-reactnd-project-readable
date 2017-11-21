import { postFilterTabBarItems } from 'components/Post'

/**
 * Return a Post that matches the id
 */
export const getPostById = (state, id) => {
    if (id == null) {
        return null;
    }

    //when there is no loaded post we should try to load the specific one
    if (state.posts.itemsById == null) {
        return null;
    }

    if (state.posts.itemsById[id] == null || state.posts.itemsById[id].deleted) {
        return null;
    }

    return state.posts.itemsById[id];
}

/**
 * Filter and order the post items 
 * @param {*} state 
 * @param {*} category The category to filter the posts
 * @param {*} orderBy The order by type to filter
 */
export const getFilteredPosts = (state, category, orderBy) => {
    //when there is no loaded post we should return null
    if (state.posts.itemsById == null) {
        return null;
    }

    // filter the posts creating a array of filtered posts items
    let posts = Object.values(state.posts.itemsById).filter((post) => {
        return post.deleted === false;
    });

    if (category) {
        posts = posts.filter(post => post.category === category);
    }

    // find the selected tabbar item by id
    const selectedTabBar = postFilterTabBarItems.find(item => {
        return item.id === orderBy;
    });

    if (selectedTabBar != null) {
        posts = selectedTabBar.orderBy(posts);
    }

    return posts;
}
