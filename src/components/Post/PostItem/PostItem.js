import React, { Component } from 'react';
import { PostDetailPanel } from '../PostDetailPanel'
import { getRandomInt, hashCode } from 'utils/Utils.js'
export class PostItem extends Component {
	render() {

		const sex = hashCode(this.props.post.author) % 2 ? 'male' : 'female';

		return (
			<article className="question question-type-normal">
				<PostDetailPanel {...this.props.post} />
				<div className="question-status">
					<div className="statscontainer">
						<div className="statscontainer status strong answered-accepted">
							<strong>{this.props.post.voteScore}</strong> votes
                    </div>
					</div>
					<br />
					<div className="statscontainer">
						<div className="statscontainer status strong answered-accepted">
							<strong>{this.props.post.commentCount}</strong> replies
                    	</div>
					</div>
				</div>
				<div className="clearfix"></div>
			</article >
		);
	}
}