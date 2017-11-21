import React from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import { MainContainer } from 'containers/App'

import { ProtectedRoute } from 'containers/Route'

import { PostListFilterContainer, PostDetailContainer, PostAddEditContainer } from 'containers/Post'
import { CommentAddEditContainer } from 'containers/Comment'

import { LoginFormContainer } from 'containers/Login'

class App extends React.Component {

    render() {
        return (
            <MainContainer>
                <Route exact path="/" component={PostListFilterContainer} />
                <Route exact path="/login" component={LoginFormContainer} />
                <Route exact path="/category/:category" component={PostListFilterContainer} />
                <Route exact path="/post/:id" component={PostDetailContainer} />
                <ProtectedRoute exact path="/post/new" component={PostAddEditContainer} />
                <ProtectedRoute exact path="/post/:id/edit" component={PostAddEditContainer} />
                <ProtectedRoute exact path="/comment/:id/edit" component={CommentAddEditContainer} />
            </MainContainer>
        )
    }
}

export default App