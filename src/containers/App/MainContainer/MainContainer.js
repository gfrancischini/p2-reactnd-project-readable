import React from 'react';

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