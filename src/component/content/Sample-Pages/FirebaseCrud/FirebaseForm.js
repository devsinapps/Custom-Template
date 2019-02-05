import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
class FirebaseForm extends React.Component{
	state = {
		cityOfCountry: []
	}

	getCityOfCountry = (country) => {
		this.setState({
			cityOfCountry: country.states
		})
	}	
	render(){
		const { cityOfCountry } = this.state
		const { countryState, value } = this.props
		return(
			<Form onSubmit={this.props.inputEmployee}>
				<FormGroup row>
					<Label htmlFor='firstName' md='3'> First Name </Label>
					<Col md='9'>
						<Input 
							id='firstName'
							value={value.firstName}
							onChange={this.props.onChange}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor='lastName' md='3'> Last Name </Label>
					<Col md='9'>
						<Input 
							id='lastName'
							value={value.lastName}
							onChange={this.props.onChange}
						/>
					</Col>
				</FormGroup>
				<Row form>
					<Col md='7'>
						<FormGroup row>
							<Label htmlFor='gender' md='5'> Gender </Label>
							<Col md='7'>
								<Input type='select'id='gender' onChange={this.props.onChange}>
									<option value={value.gender}> {value.gender} </option>
									<option value='Male'> Male </option>
									<option value='Female'> Female </option>
								</Input>
							</Col>
						</FormGroup>
					</Col>
					<Col md='5'>
						<FormGroup row>
							<Label htmlFor='age' md='4'> Age </Label>
							<Col md='8'>
								<Input 
									type='number'
									id='age'
									value={value.age}
									onChange={this.props.onChange}
								/>
							</Col>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup row>
					<Label htmlFor='country' md='3'> Country </Label>
					<Col md='9'>
						<Input type='select' id='country' onChange={this.props.onChange}> 
						<option value={value.country}> Select Country </option>
						{countryState.map((country)=>{
							return(
								<option key={country.country} value={country.country} onClick={() => this.getCityOfCountry(country)}> {country.country} </option>
							)
						})}
						</Input>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor='city' md='3'> City </Label>
					<Col md='9'>
						<Input type='select' id='city' onChange={this.props.onChange}>
							<option value={value.city}> Select City </option>
							{cityOfCountry.map((city)=>{
								return(
									<option key={city} value={city}> {city} </option>
								)
							})}
						</Input>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor='address' md='3'> Address </Label>
					<Col md='9'>
						<Input 
							type='textarea'
							id='address'
							value={value.address}
							onChange={this.props.onChange}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor='education' md='3'> Education </Label>
					<Col md='9'>
						<Input 
							type='textarea'
							id='education'
							value={value.education}
							onChange={this.props.onChange}
						/>
					</Col>
				</FormGroup>
				<FormGroup className='text-center'>
					<Label htmlFor='btnAction' hidden> Btn Action </Label>
					<Button color='primary'> Save </Button> {' '}
					<Button color='warning' onClick={this.props.updateEmployee}> Update </Button> {' '}
					<Button color='danger' onClick={this.props.deleteEmployee}> Delete </Button> {' '}
					<Button color='info'> Reset </Button> 
				</FormGroup>
			</Form>
		)
	}
}

export default FirebaseForm