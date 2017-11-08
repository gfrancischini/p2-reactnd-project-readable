import React, { Component } from 'react';
import { getPostById } from '../../reducers/posts'
import { PostDetail } from '../../components/post'

import { CommentAddEdit } from '../../components/comment'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions'
import { withRouter } from 'react-router-dom'
import { CommentSectionContainer} from '../comment'
class PostDetailContainer extends Component {

    componentDidMount = () => {
        this.props.loadPost(this.props.id);
    }

    render() {
        if(this.props.post == null) {
            return ("Loading");
        }
        return (
        <div>
            <PostDetail post={this.props.post} />
            <CommentSectionContainer parentId={this.props.post.id}/>
            <CommentAddEdit />
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
    loadPost: fetchPost
})(PostDetailContainer))