import React from 'react';
import { PostDetailPanel } from '../PostDetailPanel'
import { VoteScore } from 'components/Common'

export const PostItem = (props) => {

	return (
		<article className="question question-type-normal">

			<PostDetailPanel {...props.post} handlePostDelete={() => props.deletePost(props.post)} editable="true" />

			<ul className="question-status">
				<li>
					<VoteScore voteScore={props.post.voteScore} handleVoteClick={(option) => props.votePost(props.post, option)} editable={true} />
					<br />
				</li>
				<li>
					<VoteScore voteScore={props.post.commentCount} text="replies" applyColorStyle={false} editable={false} />
				</li>
			</ul>
		</article >
	);
}
