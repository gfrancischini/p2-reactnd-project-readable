
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import { combineReducers } from 'redux'
import { posts } from 'containers'
import { comment } from 'containers'
import { category } from 'containers'


const reducers = combineReducers({
    posts,
    comment,
    category
})

export const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));

