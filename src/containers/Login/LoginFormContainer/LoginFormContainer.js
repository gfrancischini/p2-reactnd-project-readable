import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { LoginForm } from 'components/Login'
import { fakeAuth } from '../fakeAuth'

class LoginFormContainerInternal extends React.Component {

    state = {
        redirectToReferrer: false
    }

    login = (user, password) => {
        fakeAuth.authenticate(user, password, () => {
            this.setState(() => ({
                redirectToReferrer: true
            }))
        })

    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true) {
            console.log("redirect to: " + JSON.stringify(from));
            return <Redirect to={from} />
        }

        return <LoginForm handleLogin={this.login} />
    }
}

const mapStateToProps = (state, { location, history, match }) => {
    return {
        isAuthenticated: false
    }
}

export const LoginFormContainer = withRouter(connect(mapStateToProps, {

})(LoginFormContainerInternal))