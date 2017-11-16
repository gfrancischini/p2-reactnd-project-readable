
import React from 'react';
import { Link } from 'react-router-dom'

import { UserActionDetail } from 'components/User'

export const PostDetailPanel = ({ id, timestamp, title, body, author, authorAvatarUrl, category, voteScore, commentCount }) => {
    return (
        <div>
            <h2>
                <Link to={`/post/${id}/view`}>{title}</Link>
            </h2>
            <a className="question-report" >{category}</a>

            <div className="question-inner">
                <div className="clearfix"></div>
                <p style={{ "whiteSpace": "pre-wrap" }} className="question-desc">{body}</p>

                <div className="question-user-author">
                    <span className="question-comment"><Link style={{ "text-align": "right", "width": "100%" }} to={`/post/${id}/edit`}>Edit</Link></span>
                    <div className="clearfix"></div>
                    <UserActionDetail author={author} timestamp={timestamp} avatarUrl={authorAvatarUrl} />
                </div>
                <div className="clearfix"></div>

            </div>



        </div>
    )
}