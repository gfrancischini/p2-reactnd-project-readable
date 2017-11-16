import React from 'react';

import {CategoryStatsContainer} from 'containers/Category'

export class SideBarContainer extends React.Component {
    render() {
        return (
            <aside className="col-md-3 sidebar">
                <CategoryStatsContainer/>
            </aside>
        )
    }
}