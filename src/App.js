import React, { Component } from 'react';
import './App.css';
import { PostListFilter, PostDetailContainer } from './containers/post'
import { Route } from 'react-router-dom'
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