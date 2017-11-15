import React from 'react';

import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

import { Footer } from 'components/App'

import { PostListFilterContainer, PostDetailContainer, PostAddEditContainer } from 'containers/Post'
import { CommentAddEditContainer } from 'containers/Comment'
import { HeaderContainer, FooterContainer, ContentContainer } from 'containers/App'

export class MainContainer extends React.Component {
    render() {
        return (
            <div id="wrap" className="grid_1200">
                <HeaderContainer />
                <br />

                <ContentContainer>
                    {this.props.children}
                </ContentContainer>

                <FooterContainer />
            </div>
        )
    }
}