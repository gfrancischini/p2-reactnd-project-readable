import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import uuid from 'uuid-v4'

import { CommentAddEdit } from '../../components/comment'
import { addComment, fetchComment } from '../../actions'
import { getCommentById } from '../../reducers/comment'

class CommentAddEditContainer extends Component {

    constructor() {
        super();
        this.state = {
            error : null
        };
    }

    componentDidMount = () => {
        this.props.loadComment();
    }

    handleSaveComment = (body) => {
        const comment = {
            id: uuid(),
            timestamp: Date.now(),
            body: body,
            author: "Gabriel",
            parentId: this.props.parentId,
        }

        this.props.addComment(comment)
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

const mapStateToProps = (state, {parentId, location, history, match}) => {
    const id = match.params.id;
    const comment = getCommentById(state, id);

    return {
        comment,
        id,
        parentId
    }
}
export default withRouter(connect(mapStateToProps, {
    loadComment : fetchComment,
    addComment: addComment
})(CommentAddEditContainer))
