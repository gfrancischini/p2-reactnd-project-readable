import React from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import { MainContainer } from 'containers/App'

import { PostListFilterContainer, PostDetailContainer, PostAddEditContainer } from 'containers/Post'
import { CommentAddEditContainer } from 'containers/Comment'

class App extends React.Component {

    render() {
        return (
            <MainContainer>
                <Route exact path="/" component={PostListFilterContainer} />
                <Route exact path="/:category" component={PostListFilterContainer} />
                <Route exact path="/post/:id/view" component={PostDetailContainer} />
                <Route exact path="/post/new" component={PostAddEditContainer} />
                <Route exact path="/post/:id/edit" component={PostAddEditContainer} />
                <Route exact path="/comment/:id/edit" component={CommentAddEditContainer} />
            </MainContainer>
        )
    }
}

export default App