import React, { Component } from 'react';
import * as RestClientAPI from '../services/api/RestClientAdapter'
import uuid from 'uuid-v4'

export class CommentAddEdit extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        console.log(e);
        this.setState({ text: e.target.value })
    }

    handleAddComment = (e) => {
        e.preventDefault();
        /**
         * id: Any unique ID. As with posts, UUID is probably the best here.
      timestamp: timestamp. Get this however you want.
      body: String
      author: String
      parentId: Should match a post id in the database.
         */
        const comment = {
            id: uuid(),
            timestamp: 2,
            body: this.state.text,
            author: "Gabriel",
            parentId: this.props.parentId,
        }


        console.log("handleAddComment: ", JSON.stringify(comment));



        RestClientAPI.addComment(comment).then((result) => {
            console.log("getAllCommentsFromPost success: " + JSON.stringify(result));
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        return (
            <div id="respond" class="comment-respond page-content clearfix">
                <div class="boxedtitle page-title"><h2>Leave a reply</h2></div>
                <form action="" method="post" id="commentform" class="comment-form">
                    <div id="respond-textarea">
                        <p>
                            <label class="required" for="comment">Comment<span>*</span></label>
                            <textarea id="comment" name="comment" value={this.state.text} onChange={this.handleChange} aria-required="true" cols="58" rows="8"></textarea>
                        </p>
                    </div>
                    <p class="form-submit">
                        <input name="submit" type="submit" id="submit" value="Post your answer" class="button small color" onClick={this.handleAddComment} />
                    </p>
                </form>
            </div>)
    }
}