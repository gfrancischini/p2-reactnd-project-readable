import React from 'react';

export const VoteScore = ({ voteScore, text, editable, applyColorStyle = true, handleVoteClick, style }) => {

    let colorClassName = 'none'
    if (applyColorStyle) {
        if (voteScore > 0) {
            colorClassName = 'answered-accepted'
        }
        else if (voteScore < 0) {
            colorClassName = 'answered-not-accepted'
        }
    }

    if (!text) {
        text = "votes"
    }

    return (
        <div style={{ ...style }}>
            <div className="statscontainer">
                {
                    editable &&
                    <button onClick={() => handleVoteClick("upVote")} className="question-vote-up" title="Upvote"></button>
                }
                <div className={"statscontainer status strong " + colorClassName}>
                    <strong>{voteScore}</strong> {text}
                </div>
                {
                    editable &&
                    <button onClick={() => handleVoteClick("downVote")} className="question-vote-down" title="Downvote"></button>
                }
            </div>
            <div className="clearfix"></div>
        </div>
    )
}