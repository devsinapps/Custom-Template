import React from 'react'
//Actions
import { signIn } from './../../../store/actions/authActions'
//Tools
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, FormGroup, Label, Input, Button, CardTitle, CardText } from 'reactstrap'
class Signin extends React.Component{
	state = {
		isExpanded: false,
		email: '',
		password: ''
	}

	iconChange = () => {
		this.setState({
			isExpanded: !this.state.isExpanded
		})
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
		const { isExpanded } = this.state
		const { auth } = this.props
		const iconPassword = isExpanded ? 'eye' : 'eye-slash';
		const typePassword = isExpanded ? 'text': 'password';
		if(auth.uid != null) return <Redirect to='/' />
		return(
		<div className='SignIn'>
			<CardTitle> Sign In </CardTitle>
			<CardText> Custom Template </CardText>
			<Form onSubmit={this.onSubmit}>
				<FormGroup>
					<Input
						id='email'
						onChange={this.onChange}
						placeholder='Email'
						required
					/>
					
					<span className='iconForm'> <FontAwesomeIcon icon='at' /> </span>
				</FormGroup>
				<FormGroup>
					<Input
						type={typePassword}
						id='password'
						onChange={this.onChange}
						placeholder='Password'
						required
					/>
					
					<span className='iconForm'> <FontAwesomeIcon icon='lock' /> </span>
					<span className='iconPassword' onClick={this.iconChange}> <FontAwesomeIcon icon={iconPassword} /> </span>
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