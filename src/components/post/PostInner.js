
import React from 'react';
import { Link } from 'react-router-dom'

export const PostInner = ({id, timestamp, title, body, author, category, voteScore, commentCount}) => {
    return (
        <div>
            <h2>
                <Link to={`/post/${id}/view`}>{title}</Link>
            </h2>
            <a className="question-report" >{category}</a>
            
            <div className="question-inner">
                <div className="clearfix"></div>
                <p className="question-desc">{body}</p>
                <div className="question-details">
                    <span className="question-favorite"><i className="icon-star"></i>{voteScore}</span>
                </div>
                <span className="question-category"><a ><i className="icon-folder-close"></i>{category}</a></span>
                <span className="question-date"><i className="icon-time"></i>{timestamp}</span>
                <span className="question-comment"><a><i className="icon-comment"></i>{commentCount} Comments</a></span>
                <span className="question-view"><i className="icon-user"></i>70 views</span>
                
            </div></div>)
}