
import React from 'react';
import { Link } from 'react-router-dom'
export const AppSideBar = ({ children }) => (
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
)
