
import React from 'react';
import { Link } from 'react-router-dom'

export const VoteScore = ({ voteScore, editable, handleVoteClick, style }) => {

    let colorClassName = 'none'
    if (voteScore > 0) {
        colorClassName = 'answered-accepted'
    }
    else if (voteScore < 0) {
        colorClassName = 'answered-not-accepted'
    }

    return (
        <div style={{ ...style }}>
            <div className="statscontainer">
                {
                    editable ?
                        <button onClick={() => handleVoteClick("upVote")} className="question-vote-up" title="Like"></button>
                        : null
                }
                <div className={"statscontainer status strong " + colorClassName}>
                    <strong>{voteScore}</strong> votes
                </div>
                {
                    editable ?
                        <button onClick={() => handleVoteClick("downVote")} className="question-vote-down" title="Dislike"></button>
                        : null
                }
            </div>
            <div className="clearfix"></div>
        </div>
    )
}