import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { createPost } from '../../actions'
import { getPostById } from '../../reducers/posts'
import { PostBar } from '../../components/post'

class PostBarContainer extends Component {


    render() {
        const handleNewPostButtonClick = () => {
            const post = {
                //id: uuid(),
                timestamp: Date.now(),
                //title: values.title,
                //body: values.body,
                //author: values.author,
                //category: values.category
            };

            this.props.createPost(post);
        }

        return (<PostBar handleNewPostButtonClick={handleNewPostButtonClick} />)
    }
}

const mapStateToProps = (state, { location, history, match }) => {

}

export default withRouter(connect(mapStateToProps, {
    createPost: createPost
})(PostBarContainer))