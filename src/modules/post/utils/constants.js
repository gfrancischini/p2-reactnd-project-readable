import { orderByRecentPosts, orderByMostVotes, orderByMostComments, orderByRecentComment } from './filterFunctions'

/**
 * Available post filter tabbar items
 */
export const postFilterTabBarItems = [];
postFilterTabBarItems.push({ title: "Newest", id: "Newest", orderBy: orderByRecentPosts });
postFilterTabBarItems.push({ title: "Most Votes", id: "MostVotes", orderBy: orderByMostVotes });
postFilterTabBarItems.push({ title: "Most Comments", id: "MostComments", orderBy: orderByMostComments });
postFilterTabBarItems.push({ title: "Recently Commented", id: "RecentlyCommented", orderBy: orderByRecentComment });
