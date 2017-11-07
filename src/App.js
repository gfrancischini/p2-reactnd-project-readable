import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PostList, PostDetail } from './components/post'
import PostListFilter from './containers/PostListFilter'
import * as RestClientAPI from './services/api/RestClientAdapter'

class App extends Component {

    state = {
        posts: null
    }

    
    render() {
        return (

            <div id="wrap" class="grid_1200">
                <section class="container main-content">
                    <div class="row">
                        <div class="col-md-9">
                            <PostListFilter/>
                            {this.state.posts ? <PostDetail post={this.state.posts[0]}/> : null}
                            <div class="tabs-warp question-tab">
                                <ul class="tabs">
                                    <li class="tab"><a href="#" class="current">Recent Questions</a></li>
                                    <li class="tab"><a href="#">Most Responses</a></li>
                                    <li class="tab"><a href="#">Recently Answered</a></li>
                                    <li class="tab"><a href="#">No answers</a></li>
                                </ul>
                                <div class="tab-inner-warp">
                                    <div class="tab-inner">
                                        {this.state.posts ? <PostList posts={this.state.posts} /> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
