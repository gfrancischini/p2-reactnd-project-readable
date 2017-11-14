import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCategories, getCategories } from 'containers/Category'

import { Header } from 'components/App'

class HeaderContainer1 extends Component {

    componentDidMount = () => {
        this.props.loadCategories();
    }

    render() {
        return (
            <Header />
        )
    }
}

const mapStateToProps = (state) => {
    const categories = getCategories(state);
    return {
        categories
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    loadCategories: fetchCategories
})(HeaderContainer1)
