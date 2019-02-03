import React from 'react'
//Actions
import { signUp } from './../../../store/actions/authActions'
//Component
import Info from './SignUp-Component/Info'
import Contact from './SignUp-Component/Contact'
import Security from './SignUp-Component/Security'
//Tools
import { connect } from 'react-redux'

class SignUp extends React.Component{
	state = {
		step: 1,
		firstName: '',
		lastName: '',
		gender: '',
		age: '',
		navColor: '',
		keyPass: '',
		email: '',
		password: ''
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	nextStep = (e) => {
		e.preventDefault();
		const { step } = this.state
		this.setState({
			step: step + 1
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.signUp(this.state)
	}
	render(){
		console.log(this.state)
		const { step } = this.state
		switch(step){
			case 1:
				return(
					<Info 
						nextStep={this.nextStep}
						onChange={this.onChange}
					/>
				)

			case 2:
				return(
					<Contact 
						nextStep={this.nextStep}
						onChange={this.onChange}
					/>
				)

			case 3:
				return(
					<Security 
						onChange={this.onChange}
						onSubmit={this.onSubmit}
					/>
				)

			default:
				return null
		}

	}
}

const mapStateToProps = (state) => {
	return{

	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signUp: (newUser) => dispatch(signUp(newUser))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)