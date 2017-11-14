import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string';



import { PostListFilter } from '../components';
import { fetchPosts } from '../data/actions'

import {getFilteredPosts} from '../data/selectors'



class PostListFilterContainer extends React.Component {

    componentDidMount = () => {
        //retrive all posts from server
        this.props.loadPosts();
    }

    handleSelectedChange = (selectedId) => {
        const parsed = queryString.parse(this.props.location.search);
        const search = queryString.stringify({...parsed, sort: selectedId });
        //update the browser url
		this.props.history.push({
            pathname: this.props.location.pathname,
			search
		});
    }

    render() {
        const { posts, sort } = this.props;

        return (
            <PostListFilter posts={posts} selectedFilterId={sort} handleFilterChange={this.handleSelectedChange}/>
        )
    }
}


const mapStateToProps = (state, {location, history, match}) => {
    const params = new URLSearchParams(location.search);
    const sort = params.get('sort') ? params.get('sort') : 'Newest';

    let category;
    if(match.params.category) {
        category = match.params.category;
    }
    else {
        category = params.get('category') ? params.get('category') : null;
    }



    return {
        posts : getFilteredPosts(state, category, sort),
        sort,
        category,
        location,
        history
    }
}

export const PostListContainer = withRouter(connect(mapStateToProps, {
    loadPosts: fetchPosts
})(PostListFilterContainer))