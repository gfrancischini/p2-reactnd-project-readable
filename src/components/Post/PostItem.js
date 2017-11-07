import React, { Component } from 'react';

export class PostItem extends Component {
	render() {
		const {timestamp, title, body, author, category, voteScore, commentCount} = this.props.post;
		return (
			<article className="question question-type-normal">
				<h2>
					<a href="single_question.html">{title}</a>
				</h2>
				<a className="question-report" href="#">{category}</a>
				<div className="question-author">
					<a href="#" original-title="ahmed" className="question-author-img tooltip-n"><span></span><img alt="" src="http://placehold.it/60x60/FFF/444" /></a>
				</div>
				<div className="question-inner">
					<div className="clearfix"></div>
					<p className="question-desc">{body}</p>
					<div className="question-details">
						<span className="question-favorite"><i className="icon-star"></i>{voteScore}</span>
					</div>
					<span className="question-category"><a href="#"><i className="icon-folder-close"></i>{category}</a></span>
					<span className="question-date"><i className="icon-time"></i>{timestamp}</span>
					<span className="question-comment"><a href="#"><i className="icon-comment"></i>{commentCount} Comments</a></span>
					<span className="question-view"><i className="icon-user"></i>70 views</span>
					<div className="clearfix"></div>
				</div>
			</article>
		);
	}
}