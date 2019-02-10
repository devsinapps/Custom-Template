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
		const enabled = value.employeeId.length > 0
		return(
			<Form onSubmit={this.props.inputEmployee}>
				<Row form>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='firstName'> First Name </Label>
							<Input 
								id='firstName'
								value={value.firstName}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='lastName'> Last Name </Label>
							<Input 
								id='lastName'
								value={value.lastName}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='gender'> Gender </Label>
							<Input type='select'id='gender' onChange={this.props.onChange}>
								<option value={value.gender}> {value.gender} </option>
								<option value='Male'> Male </option>
								<option value='Female'> Female </option>
							</Input>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='age'> Age </Label>
							<Input 
								type='number'
								id='age'
								value={value.age}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='country'> Country </Label>
							<Input type='select' id='country' onChange={this.props.onChange}> 
							<option value={value.country}> {value.country} </option>
							{countryState.map((country)=>{
								return(
									<option key={country.country} value={country.country} onClick={() => this.getCityOfCountry(country)}> {country.country} </option>
								)
							})}
							</Input>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='city'> City </Label>
							<Input type='select' id='city' onChange={this.props.onChange}>
								<option value={value.city}> {value.city} </option>
								{cityOfCountry.map((city)=>{
									return(
										<option key={city} value={city}> {city} </option>
									)
								})}
							</Input>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='address'> Address </Label>
							<Input 
								type='textarea'
								id='address'
								value={value.address}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor='education'> Education </Label>
							<Input 
								type='textarea'
								id='education'
								value={value.education}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
				<FormGroup className='text-center'>
					<Label htmlFor='btnAction' hidden> Btn Action </Label>
					<Button color='primary' disabled={enabled}> Save </Button> {' '}
					<Button color='warning' onClick={this.props.updateEmployee} disabled={!enabled}> Update </Button> {' '}
					<Button color='danger' onClick={this.props.deleteEmployee} disabled={!enabled}> Delete </Button> {' '}
					<Button color='info' onClick={this.props.resetButton}> Reset </Button> 
				</FormGroup>
			</Form>
		)
	}
}

export default FirebaseForm