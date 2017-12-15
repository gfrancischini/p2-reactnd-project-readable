import React, { Component } from 'react';
import { PostDetailPanel } from '../PostDetailPanel'
import { VoteScore } from 'components/Common'

export class PostItem extends Component {
	render() {
		return (
			<article className="question question-type-normal">
				<PostDetailPanel {...this.props.post} />

				<ul className="question-status">
					<li>
						<VoteScore voteScore={this.props.post.voteScore} editable={false} />
						<br />
					</li>
					<li>
						<VoteScore voteScore={this.props.post.commentCount} text="replies" applyColorStyle={false} editable={false} />
					</li>
				</ul>
			</article >
		);
	}
}