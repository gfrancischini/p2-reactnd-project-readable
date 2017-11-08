import sortBy from 'sort-by'

export const orderByRecentPosts = (posts) => {
    return posts.sort(sortBy('-timestamp'));
}

export const orderByMostVotes = (posts) => {
    return posts.sort(sortBy('votes'));
}

export const orderByMostComments = (posts) => {
    return posts.sort(sortBy('comments'));
}

export const orderByRecentComment = (posts) => {
    return posts.filter((post) => {
        return true;
    });
}

