import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { MainContainer } from 'containers/App'
import { ProtectedRoute } from 'containers/Route'
import { PostListFilterContainer, PostDetailContainer, PostAddEditContainer } from 'containers/Post'
import { CommentAddEditContainer } from 'containers/Comment'
import { LoginFormContainer } from 'containers/Login'

class App extends React.Component {

    render() {
        return (
            <MainContainer>
                <Switch>
                    <Route exact path="/" component={PostListFilterContainer} />
                    <Route exact path="/login" component={LoginFormContainer} />
                    <Route exact path="/:category" component={PostListFilterContainer} />
                    <ProtectedRoute exact path="/post/new" component={PostAddEditContainer} />
                    <ProtectedRoute exact path="/post/:id/edit" component={PostAddEditContainer} />
                    <Route exact path="/post/:id" component={PostDetailContainer} />
                    <ProtectedRoute exact path="/comment/:id/edit" component={CommentAddEditContainer} />

                </Switch>
            </MainContainer>
        )
    }
}

export default App