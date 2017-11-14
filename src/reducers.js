import { combineReducers } from 'redux'
import {postReducer} from './modules/post'
import {commentReducer} from './modules/comment'
import {categoryReducer} from './modules/category'
const readableApp = combineReducers({
    post : postReducer,
    comment : commentReducer,
    category : categoryReducer
})

export default readableApp;