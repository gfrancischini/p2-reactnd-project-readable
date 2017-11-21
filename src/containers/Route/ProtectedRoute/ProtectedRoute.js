import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fakeAuth } from 'containers/Login'

export const ProtectedRouteInternal = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)

const mapStateToProps = (state, { location, history, match }) => {
    return {
        isAuthenticated: fakeAuth.isAuthenticated
    }
}

export const ProtectedRoute = withRouter(connect(mapStateToProps, {
})(ProtectedRouteInternal))