import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { UserActionDetail } from 'components/User'
import { VoteScore } from 'components/Common'

export class CommentItem extends Component {
    render() {
        const { id, body, author, timestamp, voteScore } = this.props.comment;
        return (
            <div>
                <div className="comment-body comment-body-answered clearfix">
                    <div className="comment-text">

                        <VoteScore style={{ float: "left" }} voteScore={voteScore} editable={true} handleVoteClick={(type) => this.props.handleVoteClick(id, type)} />

                        <div className="text" style={{ marginLeft: "101px", marginBottom: "5px" }}>
                            <p>{body}</p>
                        </div>

                        <div className="question-user-author">
                            <span className="question-comment">
                                <Link style={{ "textAlign": "right", "width": "100%" }} to={`/comment/${id}/edit`}>Edit</Link>
                                <button onClick={() => this.props.handleCommentDelete(id)} className="question-delete">Delete</button>
                            </span>

                            <div className="clearfix"></div>
                            <UserActionDetail author={author} timestamp={timestamp} />
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}