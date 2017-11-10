import React, { Component } from 'react';
import { CommentItem } from './CommentItem';
export class CommentList extends Component {
    render() {
        if (this.props.comments == null) {
            return ("Loading");
        }
        return (
            <ol className="commentlist ">
                {
                    this.props.comments.map(comment => (
                        <li className="comment" key={comment.id}>
                            <CommentItem comment={comment} parentId={this.props.parentId} />
                        </li>
                    ))
                }
            </ol>
        );
    }
}