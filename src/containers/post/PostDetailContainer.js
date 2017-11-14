import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPost, votePost } from 'actions'
import { withRouter } from 'react-router-dom'

import { getPostById } from 'reducers/posts'
import { PostDetail } from 'components/Post'
import { CommentAddEditContainer, CommentPanelContainer } from 'containers/Comment'

class PostDetailContainer extends Component {

    componentDidMount = () => {
        this.props.loadPost(this.props.id);
    }

    handlePostVote = (option) => {
        this.props.votePost(this.props.id, option);
    }

    render() {
        if (this.props.post == null) {
            return ("Loading");
        }
        return (
            <div>
                <PostDetail post={this.props.post} handleVoteClick={this.handlePostVote} />
                <CommentPanelContainer parentId={this.props.post.id} />
                <CommentAddEditContainer parentId={this.props.post.id} />
            </div>
        )
    }
}

const mapStateToProps = (state, { location, history, match }) => {
    const id = match.params.id;
    const post = getPostById(state, id);

    return {
        post,
        id,
    }
}

export default withRouter(connect(mapStateToProps, {
    loadPost: fetchPost,
    votePost: votePost
})(PostDetailContainer))