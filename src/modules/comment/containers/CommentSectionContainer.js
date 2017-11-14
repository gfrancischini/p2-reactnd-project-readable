import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getCommentsByParentId } from '../data/selectors'
import { CommentSection } from '../components'

import { fetchComments, voteComment } from '../data/actions'


class CommentSectionContainer1 extends React.Component {

    componentDidMount = () => {
        this.props.loadComments(this.props.parentId);
    }

    handlePostVote = (id, option) => {
        this.props.voteComment(id, option);
    }

    render() {
        return <CommentSection
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

export const CommentSectionContainer = withRouter(connect(mapStateToProps, {
    loadComments: fetchComments,
    voteComment: voteComment
})(CommentSectionContainer1))