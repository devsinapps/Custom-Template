import React, { Component } from 'react'
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
class UpdateForm extends Component{
	render(){
		const { profileAuth, value } = this.props
		const displayAction = value.uid.length > 0 ? 
			<FormGroup className='text-center'>
				<Label htmlFor="btn" hidden> Btn Action </Label>
				<Button> Update </Button> {' '}
				<Button> Reset </Button>
			</FormGroup>
			:
			null
			;

		return(
				<Form onSubmit={this.props.updateProfile}>
					<FormGroup row>
						<Label htmlFor="firstName" md={3}> First Name </Label>
						<Col md={9}>
							<Input
								id='firstName'
								value={value.firstName}
								onChange={this.props.onChange}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label htmlFor="lastName" md={3}> Last Name </Label>
						<Col md={9}>
							<Input
								id='lastName'
								value={value.lastName}
								onChange={this.props.onChange}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label htmlFor="gender" md={3}> Gender </Label>
						<Col md={9}>
							<Input type='select' id='gender' onChange={this.props.onChange}>
								<option value={value.gender}> {value.gender} </option>
								<option value='Male'> Male </option>
								<option value='Female'> Female </option>
							</Input>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label htmlFor="age" md={3}> Age </Label>
						<Col md={9}>
							<Input
								id='age'
								value={value.age}
								onChange={this.props.onChange}
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label htmlFor="email" md={3}> Email </Label>
						<Col md={9}>
							<Input
								id='email'
								value={value.email}
								disabled
							/>
						</Col>
					</FormGroup>
					<FormGroup row>
						<Label htmlFor="phone" md={3}> Phone Number </Label>
						<Col md={9}>
							<Input
								id='phone'
								value={value.phone}
								onChange={this.props.onChange}
							/>
						</Col>
					</FormGroup>
					{displayAction}
				</Form>
			)
		
	}
}

export default UpdateForm