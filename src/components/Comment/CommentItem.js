import React, { Component } from 'react';

export class CommentItem extends Component {
    render() {
        const { timestamp, body, author, voteScore, commentCount } = this.props.comment;
        return (
            <li class="comment">
                <div class="comment-body comment-body-answered clearfix">
                    <div class="avatar"><img alt="" src="http://placehold.it/60x60/FFF/444" /></div>
                    <div class="comment-text">
                        <div class="author clearfix">
                            <div class="comment-author"><a href="#">admin</a></div>
                            <div class="comment-vote">
                                <ul class="question-vote">
                                    <li><a href="#" class="question-vote-up" title="Like"></a></li>
                                    <li><a href="#" class="question-vote-down" title="Dislike"></a></li>
                                </ul>
                            </div>
                            <span class="question-vote-result">+1</span>
                            <div class="comment-meta">
                                <div class="date"><i class="icon-time"></i>January 15 , 2014 at 10:00 pm</div>
                            </div>
                            <a class="comment-reply" href="#"><i class="icon-reply"></i>Reply</a>
                        </div>
                        <div class="text"><p>{body}</p>
                        </div>
                        <div class="question-answered question-answered-done"><i class="icon-ok"></i>Best Answer</div>
                    </div>
                </div>
                <ul class="children">
                    
                </ul>
            </li>
        );
    }
}