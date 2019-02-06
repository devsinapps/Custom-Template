import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button, CardTitle, CardText, CustomInput } from 'reactstrap'
class Info extends React.Component{
	render(){
		const { value } = this.props
		const enabled = value.firstName.length > 0 &&
						value.lastName.length > 0 && 
						value.gender.length > 0 &&
						value.age.length > 0;
		return(
		<div className='SignUp'>
			<CardTitle> Sign Up </CardTitle>
			<CardText> Custom Template </CardText>
			<Form>
				<FormGroup>
					<Input
						id='firstName'
						onChange={this.props.onChange}
						required
					/>
					<span className='labelInput'> First Name </span>
				</FormGroup>
				<FormGroup>
					<Input
						id='lastName'
						onChange={this.props.onChange}
						required
					/>
					<span className='labelInput'> Last Name </span>
				</FormGroup>
				<Row form>
					<Col md='8'>
						<FormGroup>
							<Label htmlFor='gender'> Gender </Label>
							<CustomInput type='select' id='gender' onChange={this.props.onChange}>
								<option value=''> Select Gender </option>
								<option value='Male'> Male </option>
								<option value='Female'> Female </option>
							</CustomInput>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='age'> Age </Label>
							<Input
								type='number'
								id='age'
								onChange={this.props.onChange}
								required
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Label htmlFor='signin' hidden > Sign Up </Label>
					<Button block onClick={this.props.nextStep} disabled={!enabled}> Next </Button>
				</FormGroup>
			</Form>
		</div>
		)
	}
}

export default Info