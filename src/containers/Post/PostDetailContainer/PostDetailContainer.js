import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPost, votePost, deletePost } from '../actions'
import { withRouter } from 'react-router-dom'

import { getPostById } from '../selectors'
import { PostDetail } from 'components/Post'
import { CommentAddEditContainer, CommentPanelContainer } from 'containers/Comment'

class PostDetailContainer1 extends Component {

    constructor(props) {
        super(props);
        this.state = { isPostLoaded: false }
    }

    componentDidMount = () => {
        this.props.loadPost(this.props.id).then(() => {
            this.setState({ isPostLoaded: true })
        });
    }

    handlePostVote = (option) => {
        this.props.votePost(this.props.id, option);
    }

    handlePostDelete = () => {
        console.log("handlePostDelete");
        this.props.deletePost(this.props).then(() => {
            this.props.history.push(`/`);
        })
    }

    render() {
        if (this.props.post == null && this.state.isPostLoaded) {
            return ("This post does not exists");
        }
        else if (this.props.post == null) {
            return ("Loading");
        }
        return (
            <div>
                <PostDetail
                    post={this.props.post}
                    editable={true}
                    handleVoteClick={this.handlePostVote}
                    handlePostDelete={this.handlePostDelete} />
                <CommentPanelContainer parentId={this.props.post.id} />
                <CommentAddEditContainer parentId={this.props.post.id} /> :
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

export const PostDetailContainer = withRouter(connect(mapStateToProps, {
    loadPost: fetchPost,
    votePost: votePost,
    deletePost: deletePost
})(PostDetailContainer1))