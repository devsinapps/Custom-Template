import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
class Contact extends React.Component{
	render(){
		return(
			<Form>
				<FormGroup>
					<Label htmlFor='email'> Email </Label>
					<Input
						id='email'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='phone'> Phone Number </Label>
					<Input
						id='phone'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='signin' hidden > Sign Up </Label>
					<Button block onClick={this.props.nextStep}> Next </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default Contact