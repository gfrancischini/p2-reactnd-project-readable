import React from 'react';
import { Link } from 'react-router-dom'

import { UserActionDetail } from 'components/User'

export const PostDetailPanel = ({ id, timestamp, title, body, author, category, voteScore, commentCount, editable, handlePostDelete }) => {
    return (
        <div>
            <h2>
                <Link to={`/post/${id}`}>{title}</Link>
            </h2>
            <a className="question-report" >{category}</a>

            <div className="question-inner">
                <div className="clearfix"></div>
                <p style={{ "whiteSpace": "pre-wrap" }} className="question-desc">{body}</p>

                <div className="question-user-author">
                    {editable ?
                        <span className="question-comment">
                            <Link style={{ "textAlign": "right", "width": "100%" }} to={`/post/${id}/edit`}>Edit</Link>
                            <button onClick={handlePostDelete} className="question-delete">Delete</button>
                        </span>
                        : null
                    }
                    <div className="clearfix"></div>
                    <UserActionDetail author={author} timestamp={timestamp} />
                </div>
                <div className="clearfix"></div>
            </div>
        </div >
    )
}