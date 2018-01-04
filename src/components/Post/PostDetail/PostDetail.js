import React, { Component } from 'react';
import { PostDetailPanel } from '../PostDetailPanel'
import { VoteScore } from 'components/Common'
export class PostDetail extends Component {

    render() {
        if (this.props.post == null) {
            return 'No Post'
        }
        return (
            <div>

                <article className="question question-type-normal">
                    <PostDetailPanel {...this.props.post} handlePostDelete={this.props.handlePostDelete} editable={this.props.editable} />
                    <div className="question-status">
                        <VoteScore voteScore={this.props.post.voteScore} editable={true} handleVoteClick={this.props.handleVoteClick} />
                    </div>

                </article>
            </div>
        );
    }
}


