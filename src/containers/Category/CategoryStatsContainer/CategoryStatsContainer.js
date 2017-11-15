import React, { Component } from 'react';
import { connect } from 'react-redux'
//import { fetchPost, createPost, updatePost } from '../actions'
import { getCategories } from '../selectors'
import { CategoryStats } from 'components/Category'

class CategoryStatsContainer1 extends Component {


    render() {


        return (
            <CategoryStats categories={this.props.categories} />
        )
    }
}

const mapStateToProps = (state, { }) => {
    const categories = getCategories(state);

    return {
        categories,
    }
}

export const CategoryStatsContainer = connect(mapStateToProps, {

})(CategoryStatsContainer1)