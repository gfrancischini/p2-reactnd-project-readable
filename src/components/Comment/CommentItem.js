import React, { Component } from 'react';
export class CommentItem extends Component {
    render() {
        //const { id, timestamp, body, author, voteScore, commentCount } = this.props.comment;
        const {  body, author, timestamp } = this.props.comment;
        return (
                <div>
                <div className="comment-body comment-body-answered clearfix">
                    <div className="avatar"><img alt="" src="http://placehold.it/60x60/FFF/444" /></div>
                    <div className="comment-text">
                        <div className="author clearfix">
                            <div className="comment-author"><a >{author}</a></div>
                            <div className="comment-vote">
                                <ul className="question-vote">
                                    <li><a className="question-vote-up" title="Like"></a></li>
                                    <li><a className="question-vote-down" title="Dislike"></a></li>
                                </ul>
                            </div>
                            <span className="question-vote-result">+1</span>
                            <div className="comment-meta">
                                <div className="date"><i className="icon-time"></i>{timestamp}</div>
                            </div>
                            <a className="comment-reply"><i className="icon-reply"></i>Reply</a>
                        </div>
                        <div className="text"><p>{body}</p>
                        </div>
                        <div className="question-answered question-answered-done"><i className="icon-ok"></i>Best Answer</div>
                    </div>
                </div>
                </div>
        );
    }
}