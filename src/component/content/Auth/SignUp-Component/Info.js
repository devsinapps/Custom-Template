import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
class Info extends React.Component{
	render(){
		return(
			<div>
				<FormGroup>
					<Label htmlFor='firstName'> First Name </Label>
					<Input
						id='firstName'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='lastName'> Last Name </Label>
					<Input
						id='lastName'
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<Row form>
					<Col md='8'>
						<FormGroup>
							<Label htmlFor='gender'> Last Name </Label>
							<Input type='select' id='gender' onChange={this.props.onChange}>
								<option value=''> Select Gender </option>
								<option value='Male'> Male </option>
								<option value='Female'> Female </option>
							</Input>
						</FormGroup>
					</Col>
					<Col md='4'>
						<FormGroup>
							<Label htmlFor='age'> Age </Label>
							<Input
								type='number'
								id='age'
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup>
					<Label htmlFor='gender'> Nav Color </Label>
					<Input type='select' id='navColor' onChange={this.props.onChange}>
						<option value=''> Select Gender </option>
						<option value='#1abc9c'> TURQUOISE </option>
						<option value='#2ecc71'> EMERALD </option>
						<option value='#3498db'> PETER RIVER </option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label htmlFor='signin' hidden > Sign Up </Label>
					<Button block onClick={this.props.nextStep}> Next </Button>
				</FormGroup>
			</div>
		)
	}
}

export default Info