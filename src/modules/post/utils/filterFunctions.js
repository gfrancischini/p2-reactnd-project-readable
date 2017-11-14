import sortBy from 'sort-by'

/**
 * Order the posts by timestamp desc
 */
export const orderByRecentPosts = (posts) => {
    return posts.sort(sortBy('-timestamp'));
}

/**
 * Order the posts by most voted first
 */
export const orderByMostVotes = (posts) => {
    return posts.sort(sortBy('-voteScore'));
}

/**
 * Order the posts by most comments first
 */
export const orderByMostComments = (posts) => {
    return posts.sort(sortBy('comments'));
}

/**
 * TODO: Implement this function
 */
export const orderByRecentComment = (posts) => {
    return posts.filter((post) => {
        return true;
    });
}

