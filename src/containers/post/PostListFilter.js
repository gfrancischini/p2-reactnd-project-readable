import React, { Component } from 'react';
import { PostList, PostFilter } from '../../components/post';
import { fetchPosts } from '../../actions'
import { connect } from 'react-redux'
import {getFilteredPosts} from '../../reducers/posts'
import queryString from 'query-string';
import { withRouter } from 'react-router-dom'

class PostListFilter extends Component {

    componentDidMount = () => {
        //retrive all posts from server
        this.props.loadPosts();
    }

    handleSelectedChange = (selectedId) => {
        //update the browser url
		this.props.history.push({
			pathname: this.props.location.pathname,
			search: queryString.stringify({ sort: selectedId })
		});
    }

    render() {
        const { posts, sort, location, history } = this.props;

        //TODO move this to a high order component: https://www.robinwieruch.de/gentle-introduction-higher-order-components/ 
        if (!posts) {
            return <h1><i>Loading posts</i></h1>
        }
        if (posts.length === 0) {
            return <h1><i>There are no posts</i></h1>
        }

        return (
            <div className="tabs-warp question-tab">
                <PostFilter selectedId={sort} handleSelectedChange={this.handleSelectedChange} />
                <div className="tab-inner-warp">
                    <div className="tab-inner">
                        <PostList posts={posts} />
                    </div>
                </div>
                <div>You are now at {JSON.stringify(this.props.location)}</div>
            </div>
        )
    }
}


const mapStateToProps = (state, {location, history}) => {
    const params = new URLSearchParams(location.search);
    const sort = params.get('sort') ? params.get('sort') : 'Newest';
    const {posts} = state;
    return {
        posts : getFilteredPosts(state, sort),
        sort,
        location,
        history
    }
}

export default (connect(mapStateToProps, {
    loadPosts: fetchPosts
})(PostListFilter))