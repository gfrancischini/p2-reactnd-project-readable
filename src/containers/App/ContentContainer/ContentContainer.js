import React from 'react';

import { SideBarContainer } from '../SideBarContainer'

export class ContentContainer extends React.Component {
    render() {
        return (
            <section className="container main-content">
                <div className="row">
                    <div className="col-md-9">
                        {this.props.children}
                    </div>
                    <SideBarContainer />
                </div>
            </section>
        )
    }
}