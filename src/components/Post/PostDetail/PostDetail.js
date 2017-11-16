import React, { Component } from 'react';
import { PostDetailPanel } from '../PostDetailPanel'
export class PostDetail extends Component {



    calculateTimeDiff = () => {
        return "7 hours";
    }

    render() {
        if (this.props.post == null) {
            return 'No Post'
        }
        return (
            <div>

                <article className="question question-type-normal">
                    <PostDetailPanel {...this.props.post} />
                    <div className="question-status">
                        <div className="statscontainer">
                            <button onClick={() => this.props.handleVoteClick("upVote")} className="question-vote-up" title="Like"></button>
                            <div className="statscontainer status strong answered-accepted">
                                <strong>{this.props.post.voteScore}</strong> votes
                    </div>
                            <button onClick={() => this.props.handleVoteClick("downVote")} className="question-vote-down" title="Dislike"></button>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </article>
                <div>You are now at {JSON.stringify(this.props.location)}</div>
            </div>
        );
    }
}


