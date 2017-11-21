import React from 'react';

export class LoginForm extends React.Component {

	constructor() {
		super();
		this.state = {
			userName: null,
			password: null
		}
	}

	handleUserNameChange = (e) => {
		this.setState({
			userName: e.target.value
		})
	}

	handlePasswordChange = (e) => {
		this.setState({
			password: e.target.value
		})
	}

	handleFormSubmit = (e) => {
		const { handleLogin } = this.props;

		e.preventDefault();

		const { userName, password } = this.state;
		handleLogin(userName, password);
	}

	render() {
		return (
			<div className="login">
				<div className="row">
					<div className="col-md-12">
						<div className="page-content">
							<h2>Login</h2>
							<div className="form-style form-style-3">
								<form onSubmit={this.handleFormSubmit}>
									<div className="form-inputs clearfix">
										<p className="login-text">
											<input onChange={this.handleUserNameChange} type="text" placeholder="Username" />
											<i className="icon-user"></i>
										</p>
										<p className="login-password">
											<input onChange={this.handlePasswordChange} type="password" placeholder="Password" />
											<i className="icon-lock"></i>
										</p>
									</div>
									<p className="form-submit login-submit">
										<input type="submit" value="Log in" className="button color small login-submit submit" />
									</p>
								</form>
							</div>
						</div>
					</div>

				</div>
			</div>
		)
	}
}