import React from 'react'
import PropTypes from 'prop-types';



export class PostBar extends React.Component {

    constructor() {
        super();
        this.state = {
            comment: null
        }
    }

    render() {
        return (
            <form class="form-style form-style-2">
                <p>
                    <input type="text" id="question_title" value="Ask any question and you be sure find your answer ?" onfocus="if(this.value=='Ask any question and you be sure find your answer ?')this.value='';" onblur="if(this.value=='')this.value='Ask any question and you be sure find your answer ?';" />
                    <i class="icon-pencil"></i>
                    <span onClick={() => this.props.handleNewPostButtonClick()} class="color button small publish-question">Ask Now</span>
                </p>
            </form>

        )
    }
}


PostBar.propTypes = {
    /**
     * handleCommentButtonClick
     */
    handleNewPostButtonClick: PropTypes.func.isRequired
}