import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import uuid from 'uuid-v4'

import { CommentAddEdit } from '../components'
import { addComment, fetchComment, updateComment } from '../data/actions'
import { getCommentById } from '../data/selectors'

class CommentAddEditContainer1 extends Component {


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
            this.props.history.push(`/post/${comment.parentId}/view`);
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
                author: "Gabriel",
                parentId: this.props.parentId,
            }
            this.saveComment(comment);
        }
    }


    render() {
        return (
            <CommentAddEdit comment={this.props.comment}
                error={this.state.error}
                isProcessing={this.state.isProcessing}
                idEdition={this.props.comment != null}
                handleSaveComment={this.handleSaveComment} />
        )
    }
}

const mapStateToProps = (state, { parentId, location, history, match }) => {
    const id = match.params.id;
    const comment = getCommentById(state, id);

    return {
        comment,
        id,
        parentId
    }
}
export const CommentAddEditContainer =  withRouter(connect(mapStateToProps, {
    loadComment: fetchComment,
    addComment: addComment,
    updateComment: updateComment
})(CommentAddEditContainer1))
