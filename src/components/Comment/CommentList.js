import React, { Component } from 'react';
import { CommentItem } from './CommentItem';
export class CommentList extends Component {
    render() {
        return (
            <div id="commentlist" class="page-content">
                <div class="boxedtitle page-title"><h2>Answers ( <span class="color">5</span> )</h2></div>
                <ol class="commentlist clearfix">
                    {this.props.comments.map(comment => <CommentItem comment={comment} parentId={this.props.parentId} />)}
                </ol>
            </div>
        );
    }
}