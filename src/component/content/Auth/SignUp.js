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
		keyPass: '',
		email: '',
		phone: '',
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

	//Handle Input Form Phone Number
	handleChangePhone = (e) => {
		const { phone } = this.state 
		const checkIn = e.target.value
		if(e.target.validity.valid){
			this.setState({
				phone: checkIn
			})
		}else if(checkIn == '' || checkIn == '-'){
			this.setState({
				phone: checkIn
			})
		}
		
	}

	//Handle Step In Form Contact
	handleStepAtContact = () => {
		const { email, step } = this.state
		const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(!regex.test(email)){
			return alert('Email Invalid')
		}else{
			this.setState({
				step: step + 1
			})
		}
	}

	//Handle Sign Up, password and keypass must be same
	onSubmit = (e) => {
		e.preventDefault();
		const { password, keyPass } = this.state
		if(password !== keyPass){
			return alert('Password Must Be Same')
		}else{
			this.props.signUp(this.state)
			//Send Parameter 1 to set Default Case Routes
			this.props.backCase(1)
		}
		
	}
	render(){
		const { step } = this.state
		const { firstName, lastName, gender, age, keyPass, email, phone, password } = this.state
		const value = { firstName, lastName, gender, age, keyPass, email, phone, password };
		switch(step){
			case 1:
				return(
					<Info 
						value={value}
						nextStep={this.nextStep}
						onChange={this.onChange}
					/>
				)

			case 2:
				return(
					<Contact 
						value={value}
						handleStepAtContact={this.handleStepAtContact}
						onChange={this.onChange}
						handleChangePhone={this.handleChangePhone}
					/>
				)

			case 3:
				return(
					<Security 
						value={value}
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