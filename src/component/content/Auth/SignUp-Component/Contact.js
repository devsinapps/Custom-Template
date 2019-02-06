import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button, CardTitle, CardText } from 'reactstrap'
class Contact extends React.Component{
	render(){
		const { value } = this.props
		const enabled = value.email.length > 0 &&
						value.phone.length > 0 ;
		return(
		<div className='SignUp'>
			<CardTitle> Sign Up </CardTitle>
			<CardText> Custom Template </CardText>
			<Form>
				<FormGroup>
					<Input
						id='email'
						onChange={this.props.onChange}
						required
					/>
					<span className='labelInput'> Email </span>
				</FormGroup>
				<FormGroup>
					<Input
						id='phone'
						
						min="0"
						max="100"
						maxLength='15'
						value={value.phone}
						pattern="^-?[0-9]\d*\.?\d*$"
						onChange={this.props.handleChangePhone}
						required

					/>
					<span className='labelInput'> Phone Number </span>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='signin' hidden > Sign Up </Label>
					<Button block onClick={this.props.handleStepAtContact} disabled={!enabled}> Next </Button>
				</FormGroup>
			</Form>
		</div>
		)
	}
}

export default Contact