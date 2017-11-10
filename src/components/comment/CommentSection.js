import React, { Component } from 'react';
import { CommentList } from './CommentList';
export class CommentSection extends Component {
    render() {
        if(this.props.comments == null) {
            return ("Loading");
        }
        return (
            <div id="commentlist" className="page-content">
                <div className="boxedtitle page-title"><h2>Comments ( <span className="color">{this.props.comments.length}</span> )</h2></div>
                <CommentList parentId={this.props.parentId} comments={this.props.comments}/>
            </div>
        );
    }
}