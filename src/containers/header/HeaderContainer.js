import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { AppMenu } from '../../components/header'
import { fetchCategories } from '../../actions'
import { getCategories } from '../../reducers/category'

class HeaderContainer extends Component {

    componentDidMount = () => {
        this.props.loadCategories();
    }

    render() {
        return (
            <header id="header">
                <section className="container clearfix">
                    <div className="logo"><Link to="/"><img alt="" src="/images/logo.png" /></Link></div>
                    <AppMenu categories={this.props.categories} />
                </section>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    const categories = getCategories(state);
    return {
        categories
    }
}

export default connect(mapStateToProps, {
    loadCategories: fetchCategories
})(HeaderContainer)
