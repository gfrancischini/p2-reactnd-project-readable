import React, { Component } from 'react';
import { CommentList } from './CommentList';
import { CommentAddEdit } from './CommentAddEdit';

import * as RestClientAPI from '../services/api/RestClientAdapter'
export class PostDetail extends Component {

    state = {
        comments: null
    }

    calculateTimeDiff = () => {
        return "7 hours";
    }



    componentDidMount = () => {
        console.log("componentDidMount");
        RestClientAPI.getAllCommentsFromPost(this.props.post).then((comments) => {
            this.setState({ comments, isLoading: false });
            console.log("getAllCommentsFromPost success: " + JSON.stringify(comments));
        }).catch((e) => {
            this.setState({ isLoading: false });
            console.log(e);
        });
    }


    render() {
        const { timestamp, title, body, author, category, voteScore, commentCount } = this.props.post;
        return (
            [<article className="question single-question question-type-normal">
                <h2>
                    <a href="single_question.html">This Is My first Question</a>
                </h2>
                <a className="question-report" href="#">Report</a>
                <div className="question-type-main"><i className="icon-question-sign"></i>Question</div>
                <div className="question-inner">
                    <div className="clearfix"></div>
                    <div className="question-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi adipiscing gravida odio, sit amet suscipit risus ultrices eu. Fusce viverra neque at purus laoreet consequat. Vivamus vulputate posuere nisl quis consequat. Donec congue commodo mi, sed commodo velit fringilla ac. Fusce placerat venenatis mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ornare, dolor a aliquet rutrum, dolor turpis condimentum leo, a semper lacus purus in felis. Quisque blandit posuere turpis, eget auctor felis pharetra eu .</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi adipiscing gravida odio, sit amet suscipit risus ultrices eu. Fusce viverra neque at purus laoreet consequat. Vivamus vulputate posuere nisl quis consequat. Donec congue commodo mi, sed commodo velit fringilla ac. Fusce placerat venenatis mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ornare, dolor a aliquet rutrum, dolor turpis condimentum leo, a semper lacus purus in felis. Quisque blandit posuere turpis, eget auctor felis pharetra eu .</p>
                    </div>
                    <div className="question-details">
                        <span className="question-answered question-answered-done"><i className="icon-ok"></i>solved</span>
                        <span className="question-favorite"><i className="icon-star"></i>5</span>
                    </div>
                    <span className="question-category"><a href="#"><i className="icon-folder-close"></i>wordpress</a></span>
                    <span className="question-date"><i className="icon-time"></i>4 mins ago</span>
                    <span className="question-comment"><a href="#"><i className="icon-comment"></i>5 Answer</a></span>
                    <span className="question-view"><i className="icon-user"></i>70 views</span>
                    <span className="single-question-vote-result">+22</span>
                    <ul className="single-question-vote">
                        <li><a href="#" className="single-question-vote-down" title="Dislike"><i className="icon-thumbs-down"></i></a></li>
                        <li><a href="#" className="single-question-vote-up" title="Like"><i className="icon-thumbs-up"></i></a></li>
                    </ul>
                    <div className="clearfix"></div>
                </div>
            </article>,


            this.state.comments ? (<CommentList comments={this.state.comments} />) : (<div></div>),
        
            <CommentAddEdit/>]
        );
    }
}