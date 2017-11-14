import React, { Component } from 'react';
import { PostDetailPanel } from '../PostDetailPanel'
import { getRandomInt, hashCode } from 'utils/Utils.js'
export class PostItem extends Component {
	render() {

		const sex = hashCode(this.props.post.author) % 2 ? 'male' : 'female';

		return (
			<article className="question question-type-normal">
				<PostDetailPanel {...this.props.post} />
				<div className="question-author">
					<a original-title="ahmed" className="question-author-img tooltip-n">
						<span></span><img alt="User Avatar" src={`https://avatars.dicebear.com/v1/${sex}/${this.props.post.author}/80.png`} /></a>
				</div>
				<div className="clearfix"></div>
			</article>
		);
	}
}