import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PostList, PostDetail } from './components/post'
import { PostListFilter, PostDetailContainer } from './containers/post'
import * as RestClientAPI from './services/api/RestClientAdapter'
import { Route } from 'react-router-dom'
import { orderPostsBy } from './actions'
import { connect } from 'react-redux'
class App extends Component {

    render() {
        return (
            <div id="wrap" className="grid_1200">
                <section className="container main-content">
                    <div className="row">
                        <div className="col-md-9">
                            <Route path="/posts" component={PostListFilter} />
                            <Route path="/post/:id" component={PostDetailContainer} />
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default App