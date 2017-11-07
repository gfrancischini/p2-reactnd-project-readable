import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PostList, PostDetail } from './components/post'
import { PostListFilter } from './containers/post'
import * as RestClientAPI from './services/api/RestClientAdapter'

class App extends Component {

    render() {
        return (
            <div id="wrap" class="grid_1200">
                <section class="container main-content">
                    <div class="row">
                        <div class="col-md-9">
                            <PostListFilter />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
