import React from 'react'
import PropTypes from 'prop-types';
import { AlertBox } from 'components/Common';
import { PostCategorySelection } from './PostCategorySelection'

export class PostAddEdit extends React.Component {

	constructor() {
		super();
		this.state = {
			title: null,
			body: null,
			category: null,
			error: null
		}
	}


	componentWillReceiveProps(newProps) {
		if (newProps.post) {
			this.setState({
				title: newProps.post.title,
				body: newProps.post.body,
				category: newProps.post.category
			})
		}
	}


	handleTitleChange = (e) => {
		this.setState({
			title: e.target.value
		});
	}

	handleBodyChange = (e) => {
		this.setState({
			body: e.target.value
		});
	}

	handleCategoryChange = (category) => {
		console.log("handleCategoryChange= " + category);
		this.setState({
			category
		});
	}



	handleNewPostButtonClick = (e) => {
		e.preventDefault();

		const { title, body, category } = this.state;

		const errors = [];
		if (!title) {
			errors.push("You must fill the title.");
		}
		if (!body) {
			errors.push("You must fill the body.");
		}


		if (errors.length > 0) {
			this.setState({ error: { title: "Please check the following errors:", messages: errors } });
			return;

		}

		this.props.handleNewPostButtonClick(title, body, category);
	}

	render() {
		let renderError = null;
		if (this.state.error) {
			renderError = <AlertBox type="error" title={this.state.error.title} messages={this.state.error.messages} />
		}

		let renderLoading = null;
		if (this.props.isProcessing) {
			renderLoading = null;
		}



		const submitButtonTitle = this.props.idEdition ? "Save Your Post" : "Publish Your Post";

		return (
			<div className="page-content ask-question">
				<div className="boxedtitle page-title"><h2>Create a Post</h2></div>

				<p>Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque.</p>

				<div className="form-style form-style-3" id="question-submit">
					<form>
						<div className="form-inputs clearfix">
							<p>
								<label className="required">Post Title<span>*</span></label>
								<input onChange={this.handleTitleChange} type="text" id="question-title" value={this.state.title || ''} />
								<span className="form-description">Please choose an appropriate title for the post.</span>
							</p>
							<p>
								<label className="required">Category<span>*</span></label>
								<span className="styled-select">
									<PostCategorySelection categories={this.props.categories}
										currentCategory={this.state.category}
										handleCategoryChange={this.handleCategoryChange} />
								</span>
								<span className="form-description">Please choose the appropriate section so easily search for your post.</span>
							</p>
						</div>
						<div id="form-textarea">
							<p>
								<label className="required">Details<span>*</span></label>
								<textarea style={{ "whiteSpace": "pre-wrap" }} onChange={this.handleBodyChange} id="question-details" aria-required="true" cols="58" rows="8" value={this.state.body || ''} />
								<span className="form-description">Type the description thoroughly and in detail .</span>
							</p>
						</div>

						{renderError}
						<p className="form-submit">
							<input disabled={this.props.isProcessing} onClick={this.handleNewPostButtonClick} type="submit" id="publish-question" value={submitButtonTitle} className="button color small submit" />
						</p>
					</form>
				</div>
			</div>

		)
	}
}


PostAddEdit.propTypes = {
    /**
     * handleCommentButtonClick
     */
	handleNewPostButtonClick: PropTypes.func.isRequired
}