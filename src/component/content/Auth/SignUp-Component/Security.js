import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
class Security extends React.Component{
	render(){
		return(
			<Form onSubmit={this.props.onSubmit}>
				<FormGroup>
					<Label htmlFor='password'> Password </Label>
					<Input
						id='password'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='keyPass'> Retype-Password </Label>
					<Input
						id='keyPass'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='signin' hidden > Sign Up </Label>
					<Button block> Sign Up </Button>
				</FormGroup>
			</Form>
		)
	}
}

export default Security