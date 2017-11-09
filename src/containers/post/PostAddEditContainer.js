import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid-v4'

import { createPost } from '../../actions'
import { getPostById } from '../../reducers/posts'
import { PostAddEdit } from '../../components/post'

class PostAddEditContainer extends Component {

    constructor() {
        super();
        this.state = {
            isLoading : false,
            error : null
        }
    }

    render() {
        const handleNewPostButtonClick = (title, body, category) => {
            console.log("handleNewPostButtonClick")
            const post = {
                id: uuid(),
                timestamp: Date.now(),
                title: title,
                body: body,
                author: 'my self',
                category: category || 'react'
            };

            const ret = this.props.createPost(post);
            ret.then((action) => {
                //this.setState(islo)
                this.props.history.push(`/post/${post.id}/view`);
            }, (error) => {
                console.log("error=" + error);
            })
        }

        return (<PostAddEdit handleNewPostButtonClick={handleNewPostButtonClick} />)
    }
}

const mapStateToProps = (state, { location, history, match }) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, {
    createPost: createPost
})(PostAddEditContainer))