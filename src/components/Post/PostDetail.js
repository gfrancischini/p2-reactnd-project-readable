import React, { Component } from 'react';
import { PostInner } from './PostInner'
export class PostDetail extends Component {

 

    calculateTimeDiff = () => {
        return "7 hours";
    }

    render() {
        if(this.props.post == null) {
            return 'No Post'
        }

        return (
            <div>
            <article className="question question-type-normal">
                <PostInner {...this.props.post} />
                <div className="question-author">
                <div className="comment-vote">
                                <ul className="question-vote">
                                    <li><button onClick={() => this.props.handleVoteClick("upVote")} className="question-vote-up" title="Like"></button></li>
                                    <li><span className="question-vote-result">{this.props.post.voteScore}</span></li>
                                    <li><button onClick={() => this.props.handleVoteClick("downVote")} className="question-vote-down" title="Dislike"></button></li>
                                </ul>
                            </div>
				</div>
                <div className="clearfix"></div>
            </article> 
            <div>You are now at {JSON.stringify(this.props.location)}</div>
            </div>
        );
    }
}


