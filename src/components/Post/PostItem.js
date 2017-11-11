import React, { Component } from 'react';
import { PostInner } from './PostInner'
import {getRandomInt, hashCode} from '../../Utils.js'
export class PostItem extends Component {
	render() {

		const sex = hashCode(this.props.post.author) % 2 ? 'male' : 'female';

		return (
			<article className="question question-type-normal">
				<PostInner {...this.props.post}/>
				<div className="question-author">
					<a  original-title="ahmed" className="question-author-img tooltip-n">
						<span></span><img alt="User Avatar" src={`https://avatars.dicebear.com/v1/${sex}/${this.props.post.author}/80.png`} /></a>
				</div>
				<div className="clearfix"></div>
			</article>
		);
	}
}