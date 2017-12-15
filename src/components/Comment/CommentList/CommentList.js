import React, { Component } from 'react';
import { CommentItem } from '../CommentItem';
export class CommentList extends Component {
    render() {
        if (this.props.comments == null) {
            return ("Loading");
        }
        if (this.props.comments.length === 0) {
            return (<div><span>There are no comments yet. Be the first!</span><br /><br /></div>);
        }
        return (
            <ol className="commentlist ">
                {
                    this.props.comments.map(comment => (
                        <li className="comment" key={comment.id}>
                            <CommentItem comment={comment} parentId={this.props.parentId} handleCommentDelete={this.props.handleCommentDelete} handleVoteClick={this.props.handleVoteClick} />
                        </li>
                    ))
                }
            </ol>
        );
    }
}