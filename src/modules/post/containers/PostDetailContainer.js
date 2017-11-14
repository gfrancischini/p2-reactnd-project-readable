import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { PostDetail } from '../components';
import { fetchPost, votePost } from '../data/actions'

import { getPostById } from '../data/selectors'

import { CommentAddEditContainer, CommentSectionContainer } from '../../comment'

class PostDetailContainer1 extends React.Component {

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
                <CommentSectionContainer parentId={this.props.post.id} />
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

export const PostDetailContainer = withRouter(connect(mapStateToProps, {
    loadPost: fetchPost,
    votePost: votePost
})(PostDetailContainer1))