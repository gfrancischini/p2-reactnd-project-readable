import React, { Component } from 'react';
import { getCommentsByParentId } from '../../reducers/comment'
import { CommentPanel } from '../../components/Comment'
import { connect } from 'react-redux'
import { fetchComments, voteComment } from '../../actions'
import { withRouter } from 'react-router-dom'

class CommentSectionContainer extends Component {

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

export default withRouter(connect(mapStateToProps, {
    loadComments: fetchComments,
    voteComment: voteComment
})(CommentSectionContainer))