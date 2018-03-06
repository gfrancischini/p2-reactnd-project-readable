import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { MainContainer } from 'containers'
import { ProtectedRoute } from 'containers'
import { PostListFilterContainer, PostDetailContainer, PostAddEditContainer } from 'containers'
import { CommentAddEditContainer } from 'containers'
import { LoginFormContainer } from 'containers/Login'

export const App = () => {
    return (
        <MainContainer>
            <Switch>
                <Route exact path="/" component={PostListFilterContainer} />
                <Route exact path="/login" component={LoginFormContainer} />
                <Route exact path="/:category" component={PostListFilterContainer} />
                <ProtectedRoute exact path="/post/new" component={PostAddEditContainer} />
                <ProtectedRoute exact path="/post/:id/edit" component={PostAddEditContainer} />
                <Route exact path="/:category/:id" component={PostDetailContainer} />
                <ProtectedRoute exact path="/comment/:id/edit" component={CommentAddEditContainer} />

            </Switch>
        </MainContainer>
    )
}