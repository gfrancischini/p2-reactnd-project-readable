import { combineReducers } from 'redux'
import { posts } from 'containers/Post'
import { comment } from 'containers/Comment'
import { category } from 'containers/Category'
const readableApp = combineReducers({
    posts,
    comment,
    category
})

export default readableApp;

