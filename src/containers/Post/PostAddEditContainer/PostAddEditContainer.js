import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid-v4'

import { fetchPost, createPost, updatePost } from '../actions'
import { getPostById } from '../selectors'
import { getCategories } from 'containers/Category/selectors'
import { PostAddEdit } from 'components/Post'

class PostAddEditContainer1 extends Component {

    constructor() {
        super();
        this.state = {
            isProcessing: false,
            error: null
        }
    }

    componentDidMount = () => {
        this.props.loadPost(this.props.id);
    }


    savePost(post) {

        this.props.createPost(post).then((action) => {
            this.props.history.push(`/post/${post.id}`);
        }, (error) => {
            //TODO handle this. show a msg?
            console.log("error=" + error);

            this.setState({
                error
            });
        });
    }

    updatePost(post) {
        this.props.createPost(post).then((action) => {
            this.props.history.push(`/post/${post.id}`);
        }, (error) => {
            //TODO handle this. show a msg?
            console.log("error=" + error);

            this.setState({
                error
            });
        });
    }

    handleNewPostButtonClick = (title, body, category) => {
        //TODO improve this logic here
        let post = this.props.post;
        if (post == null) {
            post = {
                id: uuid(),
                timestamp: Date.now(),
                title: title,
                body: body,
                author: 'my self',
                category: category || 'react'
            };

            this.savePost(post);
        }
        else {
            post = {
                ...post,
                timestamp: Date.now(),
                title: title,
                body: body,
                category: category
            }

            this.updatePost(post);
        }

    }

    render() {


        return (
            <PostAddEdit
                post={this.props.post}
                categories={this.props.categories}
                error={this.state.error}
                isProcessing={this.state.isProcessing}
                idEdition={this.props.post != null}
                handleNewPostButtonClick={this.handleNewPostButtonClick} />
        )
    }
}

const mapStateToProps = (state, { location, history, match }) => {
    const id = match.params.id;
    const post = getPostById(state, id);
    const categories = getCategories(state);

    return {
        post,
        categories,
        id,
    }
}

export const PostAddEditContainer = withRouter(connect(mapStateToProps, {
    createPost: createPost,
    updatePost: updatePost,
    loadPost: fetchPost
})(PostAddEditContainer1))