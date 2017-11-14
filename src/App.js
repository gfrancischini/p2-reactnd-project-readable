import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import { PostListFilter, PostDetailContainer, PostAddEditContainer } from './containers/post'
import { CommentAddEditContainer } from './containers/Comment'
import { HeaderContainer, FooterContainer } from './containers/header'


class App extends Component {

    render() {
        return (
            <div>
                <div id="wrap" className="grid_1200">
                    <HeaderContainer />

                    <br />
                    <section className="container main-content">
                        <div className="row">
                            <div className="col-md-9">
                                <Route exact path="/" component={PostListFilter} />
                                <Route exact path="/post/:id/view" component={PostDetailContainer} />
                                <Route exact path="/post/new" component={PostAddEditContainer} />
                                <Route exact path="/post/:id/edit" component={PostAddEditContainer} />
                                <Route exact path="/comment/:id/edit" component={CommentAddEditContainer} />
                            </div>

                            <aside className="col-md-3 sidebar">
                                <div>
                                    <Link to={`/post/new`}><span className="color button large publish-question" style={{ color: 'white', textAlign: 'center', width: '100%' }}>Ask Now</span></Link>
                                </div>
                                <div className="widget widget_stats">
                                    <h3 className="widget_title">Stats</h3>
                                    <div className="ul_list ul_list-icon-ok">
                                        <ul>
                                            <li><i className="icon-question-sign"></i>Questions ( <span>20</span> )</li>
                                            <li><i className="icon-comment"></i>Answers ( <span>50</span> )</li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </section>
                    <FooterContainer />
                </div>
            </div>
        )
    }
}

export default App