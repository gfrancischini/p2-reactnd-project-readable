import React, { Component } from 'react';
import { PostDetailPanel } from '../PostDetailPanel'
import { VoteScore } from 'components/Common'

export class PostItem extends Component {


	render() {
		return (
			<article className="question question-type-normal">

				<PostDetailPanel {...this.props.post} handlePostDelete={() => this.props.deletePost(this.props.post)} editable="true" />

				<ul className="question-status">
					<li>
						<VoteScore voteScore={this.props.post.voteScore} handleVoteClick={(option) => this.props.votePost(this.props.post, option)} editable={true} />
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