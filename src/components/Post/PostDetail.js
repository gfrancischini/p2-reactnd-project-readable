import React, { Component } from 'react';
import { PostInner } from './PostInner'
export class PostDetail extends Component {

 

    calculateTimeDiff = () => {
        return "7 hours";
    }

    render() {
        if(this.props.post == null) {
            return 'No Post'
        }

        return (
            <div>
            <article className="question single-question question-type-normal">
                <PostInner {...this.props.post} />
                <div className="clearfix"></div>
            </article> 
            <div>You are now at {JSON.stringify(this.props.location)}</div>
            </div>
        );
    }
}


