import React from 'react';
import { CommentList } from '../CommentList';

export const CommentPanel = (props) => {

    if (props.comments == null) {
        return ("Loading");
    }
    return (
        <div id="commentlist" className="page-content">
            <div className="boxedtitle page-title"><h2>Comments ( <span className="color">{props.comments.length}</span> )</h2></div>
            <CommentList parentId={props.parentId} comments={props.comments} handleCommentDelete={props.handleCommentDelete} handleVoteClick={props.handleVoteClick} />
        </div>
    );
}
