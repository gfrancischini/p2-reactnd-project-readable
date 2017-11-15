import React from 'react';

import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'


export class SideBarContainer extends React.Component {
    render() {
        return (
            <aside className="col-md-3 sidebar">
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
        )
    }
}