import React, { Component } from 'react';
import { PostDetailPanel } from '../PostDetailPanel'
import { getRandomInt, hashCode } from 'utils/Utils.js'
import { VoteScore } from 'components/Common'

export class PostItem extends Component {
	render() {

		const sex = hashCode(this.props.post.author) % 2 ? 'male' : 'female';

		return (
			<article className="question question-type-normal">
				<PostDetailPanel {...this.props.post} />

				<ul className="question-status">
					<li>
						<VoteScore voteScore={this.props.post.voteScore} editable={false} />
						<br />
					</li>
					<li>
						<VoteScore voteScore={this.props.post.commentCount} editable={false} />
					</li>
				</ul>
			</article >
		);
	}
}