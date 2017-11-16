
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
                    <UserActionDetail author={author} timestamp={timestamp} avatarUrl={authorAvatarUrl} />
                </div>
                <div className="clearfix"></div>

                <div style={{ "border-bottom": "1px solid #dedede", "padding-bottom": "30px", "margin-bottom": "20px" }}></div>


                <div className="question-details">
                    <span className="question-favorite"><i className="icon-star"></i>{voteScore}</span>
                </div>



                <span className="question-category"><a ><i className="icon-folder-close"></i>{category}</a></span>
                <span className="question-date"><i className="icon-time"></i>{timestamp}</span>
                <span className="question-comment"><a><i className="icon-comment"></i>{commentCount} Comments</a></span>
                <span className="question-view"><i className="icon-user"></i>70 views</span>
                <span style={{ marginLeft: "20px" }} className="question-comment"><Link to={`/post/${id}/edit`}>Edit</Link></span>
            </div>



        </div>
    )
}