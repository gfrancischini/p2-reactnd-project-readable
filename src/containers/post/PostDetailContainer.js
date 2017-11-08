import React, { Component } from 'react';
import { getPostById } from '../../reducers/posts'
import { PostDetail } from '../../components/post'
import * as RestClientAPI from '../../services/api/RestClientAdapter'
import { connect } from 'react-redux'
import { fetchPost } from '../../actions'
import { withRouter } from 'react-router-dom'

class PostDetailContainer extends Component {

    componentDidMount = () => {
        this.props.loadPost(this.props.id);
    }

    render() {
        return <PostDetail post={this.props.post} />
    }
}

const mapStateToProps = (state, { location, history, match }) => {
    console.log("match=" + JSON.stringify(match));
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