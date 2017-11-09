import React from 'react'
import PropTypes from 'prop-types';



export class PostAddEdit extends React.Component {

	constructor() {
		super();
		this.state = {
			title: null,
			body: null,
			category: null,
			updating: false
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

	handleCategoryChange = (e) => {
		this.setState({
			category: e.target.value
		});
	}

	handleNewPostButtonClick = (e) => {
		e.preventDefault();

		const { title, body, category } = this.state;

		this.props.handleNewPostButtonClick(title, body, category);
	}

	render() {
		return (
			<div class="page-content ask-question">
				<div class="boxedtitle page-title"><h2>Create a Post</h2></div>

				<p>Duis dapibus aliquam mi, eget euismod sem scelerisque ut. Vivamus at elit quis urna adipiscing iaculis. Curabitur vitae velit in neque dictum blandit. Proin in iaculis neque.</p>

				<div class="form-style form-style-3" id="question-submit">
					<form>
						<div class="form-inputs clearfix">
							<p>
								<label class="required">Post Title<span>*</span></label>
								<input onChange={this.handleTitleChange} type="text" id="question-title" />
								<span class="form-description">Please choose an appropriate title for the post.</span>
							</p>
							<p>
								<label class="required">Category<span>*</span></label>
								<span class="styled-select">
									<select>
										<option value="">Select a Category</option>
										<option value="1">Category 1</option>
										<option value="2">Category 2</option>
									</select>
								</span>
								<span class="form-description">Please choose the appropriate section so easily search for your post.</span>
							</p>
						</div>
						<div id="form-textarea">
							<p>
								<label class="required">Details<span>*</span></label>
								<textarea onChange={this.handleBodyChange} id="question-details" aria-required="true" cols="58" rows="8"></textarea>
								<span class="form-description">Type the description thoroughly and in detail .</span>
							</p>
						</div>
						<p class="form-submit">
							<input disabled={this.state.updating} onClick={this.handleNewPostButtonClick} type="submit" id="publish-question" value="Publish Your Post" class="button color small submit" />
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