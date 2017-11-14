import React, { Component } from 'react';

import { AppMain } from '../components'
import { PostRoutes } from '../../post'
import { CommentRoutes } from '../../comment'

import { HeaderContainer } from './HeaderContainer'
import { FooterContainer } from './FooterContainer'

export class AppContainer extends React.Component {
    render() {
        return (
            <div id="wrap" className="grid_1200">
                <HeaderContainer />

                <br />
                <section className="container main-content">
                    <div className="row">
                        <div className="col-md-9">
                            <AppMain>
                                <PostRoutes />
                                <CommentRoutes />
                            </AppMain>
                        </div>
                    </div>
                </section>
                <FooterContainer />
            </div>
        )
    }
}