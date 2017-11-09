import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router-dom'
import { PostListFilter, PostDetailContainer, PostAddEditContainer } from './containers/post'
import { PostBar } from './components/post'
import { Route } from 'react-router-dom'
class App extends Component {

    render() {
        return (
            <div>
                <div class="section-warp ask-me">
                    <div class="container clearfix">
                        <div class="box_icon box_warp box_no_border box_no_background" box_border="transparent" box_background="transparent" box_color="#FFF">
                            <div class="row">
                                <div class="col-md-12">
                                    <h2>Welcome to Ask me, Awesome Questions & Answer Template</h2>
                                    <p>Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vitae velit in neque dictum blandit.</p>
                                    <div class="clearfix"></div>
                                    <a class="color button dark_button medium" href="#">About Us</a>
                                    <a class="color button dark_button medium" href="#">Join Now</a>
                                    <div class="clearfix"></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="wrap" className="grid_1200">
                    <section className="container main-content">
                        <div className="row">
                            <div className="col-md-9">
                                <Route exact path="/posts" component={PostListFilter} />
                                <Route exact path="/post/:id/view" component={PostDetailContainer} />
                                <Route exact path="/post/new" component={PostAddEditContainer} />
                                <Route exact path="/post/:id/edit" component={PostAddEditContainer} />
                            </div>

                            <aside class="col-md-3 sidebar">
                                <div>
                                    <Link to={`/post/new`}><span class="color button large publish-question" style={{color:'white', textAlign:'center', width:'100%'}}>Ask Now</span></Link>
                                </div>
                                <div class="widget widget_stats">
                                    <h3 class="widget_title">Stats</h3>
                                    <div class="ul_list ul_list-icon-ok">
                                        <ul>
                                            <li><i class="icon-question-sign"></i>Questions ( <span>20</span> )</li>
                                            <li><i class="icon-comment"></i>Answers ( <span>50</span> )</li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </section>
                </div>
            </div>

        )
    }
}

export default App