import React, { Component } from 'react';
import * as RestClientAPI from '../../services/api/RestClientAdapter'
import uuid from 'uuid-v4'

export class CommentAddEdit extends Component {
    constructor(props) {
        super(props)
        this.state = { body: '' } 
    }

    componentWillReceiveProps(newProps) {
        if(newProps.body) {
			this.setState({
				body : newProps.body
			})
		}
    }

    handleChange = (e) => {
        this.setState({ body: e.target.value })
    }

    handleAddComment = (e) => {
        e.preventDefault();
       
        const body = this.state.body;
        this.props.handleSaveComment(body);

        //TODO: only clear the comment when we rcv a success response
        //TODO: handle insert error

        this.setState({ body: ""});

    }

    render() {
        return (
            <div id="respond" className="comment-respond page-content clearfix">
                <div className="boxedtitle page-title"><h2>Leave a reply</h2></div>
                <form action="" method="post" id="commentform" className="comment-form">
                    <div id="respond-textarea">
                        <p>
                            <label className="required" htmlFor="comment">Comment<span>*</span></label>
                            <textarea id="comment" name="comment" value={this.state.body} onChange={this.handleChange} aria-required="true" cols="58" rows="8"></textarea>
                        </p>
                    </div>
                    <p className="form-submit">
                        <input name="submit" type="submit" id="submit" value="Post your answer" className="button small color" onClick={this.handleAddComment} />
                    </p>
                </form>
            </div>)
    }
}