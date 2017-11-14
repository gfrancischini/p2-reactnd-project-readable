import React from 'react'
import { Route } from 'react-router-dom'
import {PostListContainer, PostDetailContainer, PostAddEditContainer} from './containers'

export const PostRoutes = () => (
    <div>
        <Route exact path="/" component={PostListContainer} />
        <Route exact path="/:category" component={PostListContainer} />
        <Route exact path="/post/:id/view" component={PostDetailContainer} />
        <Route exact path="/post/new" component={PostAddEditContainer} />
    </div>
)

