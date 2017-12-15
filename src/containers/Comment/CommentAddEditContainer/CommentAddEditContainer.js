import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import uuid from 'uuid-v4'

import { CommentAddEdit } from 'components/Comment'
import { addComment, fetchComment, updateComment } from '../actions'
import { getCommentById } from '../selectors'
import { fakeAuth } from 'containers/Login'

class CommentAddEditContainerUnwired extends Component {

    constructor() {
        super();
        this.state = {
            error: null
        };
    }

    componentDidMount = () => {
        this.props.loadComment();
    }

    saveComment(comment) {

        this.props.addComment(comment).then((action) => {
        }, (error) => {
            //TODO handle this. show a msg?
            console.log("error=" + error);

            this.setState({
                error
            });
        });
    }

    updateComment(comment) {
        this.props.updateComment(comment).then((action) => {
            this.props.history.push(`/post/${comment.parentId}`);
        }, (error) => {
            //TODO handle this. show a msg?
            console.log("error=" + error);

            this.setState({
                error
            });
        });
    }

    handleSaveComment = (body) => {
        let comment = this.props.comment;
        if (comment) {
            comment = {
                ...comment,
                timestamp: Date.now(),
                body: body,
            }
            this.updateComment(comment);
        }
        else {
            comment = {
                id: uuid(),
                timestamp: Date.now(),
                body: body,
                author: fakeAuth.user,
                parentId: this.props.parentId,
            }
            this.saveComment(comment);
        }
    }


    render() {
        console.log("this.props.comment=" + JSON.stringify(this.props.comment));
        return (


            <CommentAddEdit comment={this.props.comment}
                error={this.state.error}
                isAuthenticated={fakeAuth.isAuthenticated}
                isProcessing={this.state.isProcessing}
                isEdition={this.props.comment != null}
                handleSaveComment={this.handleSaveComment} />
        )
    }
}

const mapStateToProps = (state, { parentId, location, history, match }) => {
    const id = match.params.id;
    const comment = getCommentById(state, id);
    console.log("comment=" + JSON.stringify(comment));
    return {
        comment,
        id,
        parentId
    }
}
export const CommentAddEditContainer = withRouter(connect(mapStateToProps, {
    loadComment: fetchComment,
    addComment: addComment,
    updateComment: updateComment
})(CommentAddEditContainerUnwired))
