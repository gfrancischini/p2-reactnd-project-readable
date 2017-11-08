import { combineReducers } from 'redux'
import { posts } from './posts'
import { comment } from './comment'
const readableApp = combineReducers({
    posts,
    comment
})

export default readableApp;