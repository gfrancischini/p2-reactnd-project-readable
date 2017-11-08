import React, { Component } from 'react';
import { CommentList, CommentAddEdit } from '../comment';
import { getPostById } from '../../reducers/posts'
import * as RestClientAPI from '../../services/api/RestClientAdapter'
import { connect } from 'react-redux'
import { PostInner } from './PostInner'
export class PostDetail extends Component {

    state = {
        comments: null
    }

    calculateTimeDiff = () => {
        return "7 hours";
    }



    componentDidMount = () => {
        /*console.log("componentDidMount");
        RestClientAPI.getAllCommentsFromPost(this.props.post).then((comments) => {
            this.setState({ comments, isLoading: false });
            console.log("getAllCommentsFromPost success: " + JSON.stringify(comments));
        }).catch((e) => {
            this.setState({ isLoading: false });
            console.log(e);
        });*/
    }


    render() {
        if(this.props.post == null) {
            return 'No Post'
        }

        const { timestamp, title, body, author, category, voteScore, commentCount } = this.props.post;

        return (
            <div>
            <article className="question single-question question-type-normal">
                <PostInner {...this.props.post} />
                <div className="clearfix"></div>
            </article>
            {this.state.comments ? (<CommentList comments={this.state.comments} />) : (<div></div>)}
            <CommentAddEdit /> 
            <div>You are now at {JSON.stringify(this.props.location)}</div>
            </div>
        );
    }
}


