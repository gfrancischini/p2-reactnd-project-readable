import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PostList, PostDetail } from './components/post'
import { PostListFilter } from './containers/post'
import * as RestClientAPI from './services/api/RestClientAdapter'
import { Route } from 'react-router-dom'
import { orderPostsBy } from './actions'
import { connect } from 'react-redux'
class App extends Component {

    render() {
        return (
            <div id="wrap" class="grid_1200">
                <section class="container main-content">
                    <div class="row">
                        <div class="col-md-9">
                            <Route path="/posts" component={PostListFilter} />
                            <Route exact path="/post" render={(props) => {
                                const params = new URLSearchParams(props.location.search);
                                const query = params.get('query'); // bar
                                return (
                                    <div id="wrap" class="grid_1200">

                                    </div>
                                )
                            }} />
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default connect()(App)