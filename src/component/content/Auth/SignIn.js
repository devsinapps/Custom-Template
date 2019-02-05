import React from 'react'
//Actions
import { signIn } from './../../../store/actions/authActions'
//Tools
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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

		//Send Parameter 1 to set Default Case Routes
		this.props.backCase(1)
	}
	render(){
		const { auth } = this.props
		if(auth.uid != null) return <Redirect to='/' />
		return(
		<div className='SignIn'>
			<Form onSubmit={this.onSubmit}>
				<FormGroup>
					<Input
						id='email'
						onChange={this.onChange}
						required
					/>
					<span className='labelInput'> Email </span>
				</FormGroup>
				<FormGroup>
					<Input
						type='password'
						id='password'
						onChange={this.onChange}
						required
					/>
					<span className='labelInput'> Email </span>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='signin' hidden > Sign In </Label>
					<Button block> Sign In </Button>
				</FormGroup>
			</Form>
		</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signIn: (credentials) => dispatch(signIn(credentials))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)