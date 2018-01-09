import React from 'react';
import { CommentItem } from '../CommentItem';

export const CommentList = (props) => {
    if (props.comments == null) {
        return ("Loading");
    }
    if (props.comments.length === 0) {
        return (<div><span>There are no comments yet. Be the first!</span><br /><br /></div>);
    }
    return (
        <ol className="commentlist ">
            {
                props.comments.map(comment => (
                    <li className="comment" key={comment.id}>
                        <CommentItem comment={comment} parentId={props.parentId} handleCommentDelete={props.handleCommentDelete} handleVoteClick={props.handleVoteClick} />
                    </li>
                ))
            }
        </ol>
    );
}