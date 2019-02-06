import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col, Form, FormGroup, Label, Input, Button, CardTitle, CardText } from 'reactstrap'
class Security extends React.Component{
	state = {
		password: false,
		keyPass: false
	}

	iconChange = (e) => {
		if(e == 'password'){
			this.setState({
				password: !this.state.password
			})
		}else{
			this.setState({
				keyPass: !this.state.keyPass
			})
		}
		
	}
	render(){
		const { value } = this.props
		const { password, keyPass } = this.state
		const pwIcon = password ? 'eye' : 'eye-slash'
		const keyIcon = keyPass ? 'eye' : 'eye-slash'
		const pwType = password ? 'text' : 'password'
		const keyType = password ? 'text' : 'password'
		const enabled = value.password.length > 0 &&
						value.keyPass.length > 0 ;
		return(
		<div className='SignUp'>
			<CardTitle> Sign Up </CardTitle>
			<CardText> Custom Template </CardText>
			<Form onSubmit={this.props.onSubmit}>
				<FormGroup>
					<Input
						type={pwType}
						id='password'
						onChange={this.props.onChange}
						required
					/>
					<span className='labelInput'> Password </span>
					<span className='iconPassword' onClick={() => this.iconChange('password')}> <FontAwesomeIcon icon={pwIcon} /> </span>
				</FormGroup>
				<FormGroup>
					<Input
						type={keyType}
						id='keyPass'
						onChange={this.props.onChange}
						required
						
					/>
					<span className='labelInput'> Retype-Password </span>
					<span className='iconPassword' onClick={() => this.iconChange('keyPass')}> <FontAwesomeIcon icon={keyIcon} /> </span>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='signin' hidden > Sign Up </Label>
					<Button block disabled={!enabled}> Sign Up </Button>
				</FormGroup>
			</Form>
		</div>
		)
	}
}

export default Security