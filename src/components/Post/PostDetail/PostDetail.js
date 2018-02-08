import React from 'react';
import { PostDetailPanel } from '../PostDetailPanel'
import { VoteScore } from 'components/Common'

export const PostDetail = (props) => {
    if (props.post == null) {
        return 'No Post'
    }
    return (
        <div>
            <article className="question question-type-normal">
                <PostDetailPanel {...props.post} handlePostDelete={props.handlePostDelete} editable={props.editable} />
                <div className="question-status">
                    <VoteScore voteScore={props.post.voteScore} editable={true} handleVoteClick={props.handleVoteClick} />
                </div>
            </article>
        </div>
    );
}


