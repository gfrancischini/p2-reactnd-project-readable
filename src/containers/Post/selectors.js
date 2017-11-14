import { postFilterTabBarItems } from 'components/Post'

export const getPostById = (state, id) => {
    if (id == null) {
        return null;
    }

    //when there is no loaded post we should try to load the specific one
    if (state.posts.itemsById == null) {
        return null;
    }



    return state.posts.itemsById[id];
}

/**
 * Filter the post items
 * @param {*} state 
 * @param {*} orderBy 
 */
export const getFilteredPosts = (state, category, orderBy) => {
    //when there is no loaded post we should return null
    if (state.posts.itemsById == null) {
        return null;
    }

    // filter the posts creating a array of filtered posts items
    let posts = Object.values(state.posts.itemsById).filter((post) => {
        return true;
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