import React from 'react';
import { AlertBox } from 'components/Common';
import { Link } from 'react-router-dom'

export class CommentAddEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = { body: props.comment ? props.comment.body : '' }
    }

    componentWillReceiveProps(newProps) {
        console.log("componentWillReceiveProps=" + JSON.stringify(newProps));
        if (newProps.comment) {
            this.setState({
                body: newProps.comment.body
            })
        }
    }

    handleChange = (e) => {
        this.setState({ body: e.target.value })
    }

    handleAddComment = (e) => {
        e.preventDefault();

        const body = this.state.body;

        const errors = [];
        if (!body) {
            errors.push("You must fill the comment.");
        }

        if (errors.length > 0) {
            this.setState({ error: { title: "Please check the following errors:", messages: errors } });
            return;
        }


        this.props.handleSaveComment(body);

        //TODO: only clear the comment when we rcv a success response
        //TODO: handle insert error

        this.setState({ body: "" });
    }

    render() {
        let renderError = null;
        if (this.state.error) {
            renderError = <AlertBox type="error" title={this.state.error.title} messages={this.state.error.messages} />
        }

        return (
            <div id="respond" className="comment-respond page-content clearfix">
                <div className="boxedtitle page-title"><h2>Leave a reply</h2></div>

                {this.props.isAuthenticated ?
                    <form action="" method="post" id="commentform" className="comment-form">
                        <div id="respond-textarea">
                            <p>
                                <label className="required" htmlFor="comment">Comment<span>*</span></label>
                                <textarea id="comment" name="comment" value={this.state.body} onChange={this.handleChange} aria-required="true" cols="58" rows="8"></textarea>
                            </p>
                        </div>
                        {renderError}

                        <p className="form-submit">
                            <input name="submit" type="submit" id="submit" value="Submit your reply" className="button small color" onClick={this.handleAddComment} />
                        </p>
                    </form>
                    :
                    <Link to="/login">You must be Logged in to post a comment. Click here to login</Link>
                }


            </div>)
    }
}