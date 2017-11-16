import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { getRandomInt, hashCode } from 'utils/Utils'

import { UserActionDetail } from 'components/User'

export class CommentItem extends Component {
    render() {
        const { id, body, author, timestamp, voteScore } = this.props.comment;
        const sex = hashCode(author) % 2 ? 'male' : 'female';
        return (
            <div>
                <div className="comment-body comment-body-answered clearfix">
                    <div className="comment-text">
                        <div className="statscontainer" style={{ float: "left" }}>
                            <button onClick={() => this.props.handleVoteClick(id, "upVote")} className="question-vote-up" title="Like"></button>
                            <div className="statscontainer status strong answered-accepted">
                                <strong>{voteScore}</strong> votes
                                </div>
                            <button onClick={() => this.props.handleVoteClick(id, "downVote")} className="question-vote-down" title="Dislike"></button>
                        </div>
                        <div className="text" style={{ marginLeft: "101px", marginBottom: "5px" }}>
                            <p>{body}</p>
                        </div>

                        <div className="question-user-author">
                            <span className="question-comment"><Link style={{ "text-align": "right", "width": "100%" }} to={`/comment/${id}/edit`}>Edit</Link></span>
                            <div className="clearfix"></div>
                            <UserActionDetail author={author} timestamp={timestamp} avatarUrl={"authorAvatarUrl"} />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}