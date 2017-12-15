import React from 'react';
import { Link } from 'react-router-dom'

export const CategoryStats = ({ categories }) => {

    if (categories == null) {
        return <span>no categories</span>
    }

    return (
        <div className="widget widget_stats">
            <h3 className="widget_title">Categories Stats</h3>
            <div className="ul_list ul_list-icon-ok">
                <ul>
                    {
                        categories.map((category) => {
                            return <li key={category.name}><Link to={`/${category.path}`}><i className="icon-comment"></i>{category.name} ( <span> * </span> )</Link></li>
                        })
                    }
                </ul>
            </div>
        </div>)
}