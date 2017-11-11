import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { getRandomInt, hashCode } from '../../Utils.js'
export class CommentItem extends Component {
    render() {
        //const { id, timestamp, body, author, voteScore, commentCount } = this.props.comment;
        const { id, body, author, timestamp, voteScore } = this.props.comment;
        const sex = hashCode(author) % 2 ? 'male' : 'female';
        return (
            <div>
                <div className="comment-body comment-body-answered clearfix">
                    <div className="avatar"><img alt="" src={`https://avatars.dicebear.com/v1/${sex}/${author}/80.png`} /></div>
                    <div className="comment-text">
                        <div className="author clearfix">
                            <div className="comment-author"><a >{author}</a></div>
                            <div className="comment-vote">
                                <ul className="question-vote">
                                    <li><button onClick={() => this.props.handleVoteClick(id, "upVote")} className="question-vote-up" title="Like"></button></li>
                                    <li><button onClick={() => this.props.handleVoteClick(id, "downVote")} className="question-vote-down" title="Dislike"></button></li>
                                </ul>
                            </div>
                            <li><span className="question-vote-result">{voteScore}</span></li>
                            <div className="comment-meta">
                                <div className="date"><i className="icon-time"></i>{timestamp}</div>
                            </div>
                            <a className="comment-reply"><i className="icon-reply"></i>Reply</a>
                        </div>
                        <div className="text"><p>{body}</p>
                        </div>
                        <div className="question-answered question-answered-done"><i className="icon-ok"></i>Best Answer</div>
                        <div><Link to={`/comment/${id}/edit`}>Edit</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}