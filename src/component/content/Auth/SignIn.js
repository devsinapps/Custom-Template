import React from 'react'
//Actions
import { signIn } from './../../../store/actions/authActions'
//Tools
import { connect } from 'react-redux'

import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
class Signin extends React.Component{
	state = {
		email: '',
		password: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.signIn(this.state)
	}
	render(){
		return(
			<Form onSubmit={this.onSubmit}>
				<FormGroup>
					<Label htmlFor='email'> Email </Label>
					<Input
						type='email'
						id='email'
						onChange={this.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='password'> Password </Label>
					<Input
						type='password'
						id='password'
						onChange={this.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='signin' hidden > Sign In </Label>
					<Button block> Sign In </Button>
				</FormGroup>
			</Form>
		)
	}
}

const mapStateToProps = (state) => {
	return{

	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signIn: (credentials) => dispatch(signIn(credentials))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)