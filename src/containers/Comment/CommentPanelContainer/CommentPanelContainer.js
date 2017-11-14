import React, { Component } from 'react';
import { getCommentsByParentId } from '../selectors'
import { CommentPanel } from 'components/Comment'
import { connect } from 'react-redux'
import { fetchComments, voteComment } from '../actions'
import { withRouter } from 'react-router-dom'


class CommentPanelContainerUnwired extends Component {

    componentDidMount = () => {
        this.props.loadComments(this.props.parentId);
    }

    handlePostVote = (id, option) => {
        this.props.voteComment(id, option);
    }

    render() {
        return <CommentPanel
            parentId={this.props.parentId}
            comments={this.props.comments}
            handleVoteClick={this.handlePostVote}
        />
    }
}

const mapStateToProps = (state, { parentId }) => {
    const comments = getCommentsByParentId(state, parentId);
    return {
        parentId,
        comments
    }
}

export const CommentPanelContainer = withRouter(connect(mapStateToProps, {
    loadComments: fetchComments,
    voteComment: voteComment
})(CommentPanelContainerUnwired))