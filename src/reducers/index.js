import { combineReducers } from 'redux'
import { posts } from './posts'
import { comment } from 'containers/Comment'
import { category } from './category'
const readableApp = combineReducers({
    posts,
    comment,
    category
})

export default readableApp;

