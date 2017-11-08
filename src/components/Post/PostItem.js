import React, { Component } from 'react';
import { PostInner } from './PostInner'
export class PostItem extends Component {
	render() {
		return (
			<article className="question question-type-normal">
				<PostInner {...this.props.post}/>
				<div className="question-author">
					<a  original-title="ahmed" className="question-author-img tooltip-n">
						<span></span><img alt="" src="http://placehold.it/60x60/FFF/444" /></a>
				</div>
				<div className="clearfix"></div>
			</article>
		);
	}
}