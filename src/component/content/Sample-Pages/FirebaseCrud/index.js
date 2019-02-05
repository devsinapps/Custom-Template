import React from 'react'
//Actions
import { inputEmployee, deleteEmployee, updateEmployee } from './../../../../store/actions/firebaseCrudActions'
//Component
import FirebaseTable from './FirebaseTable'
import FirebaseForm from './FirebaseForm'
//Tools
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
class FirebaseCrud extends React.Component{
	state = {
		id: '',
		firstName: '',
		lastName: '',
		gender: '',
		age: '',
		country: '',
		city: '',
		address: '',
		education: '',
		createdAt: ''
	}

	getDataRow = (employee) => {
		console.log(employee)
		this.setState({
			id: employee.id,
			firstName: employee.firstName,
			lastName: employee.lastName,
			gender: employee.gender,
			age: employee.age,
			country: employee.country,
			city: employee.city,
			address: employee.address,
			education: employee.education,
			createdAt: employee.createdAt
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	inputEmployee = (e) => {
		e.preventDefault();
		this.props.inputEmployee(this.state)
	}

	deleteEmployee = (e) => {
		const { id } = this.state
		const check = window.confirm('Delete?')
		if(check === true){
			this.props.deleteEmployee(id)
		}else{
			return null
		}
	}

	updateEmployee = (e) => {
		const { id, firstName, lastName, gender, age, country, city, address, education, createdAt } = this.state
		const employee = { id, firstName, lastName, gender, age, country, city, address, education, createdAt }
		const check = window.confirm('Delete?')
		if(check === true){
			this.props.updateEmployee(employee)
		}else{
			return null
		}
		
	}
	render(){
		console.log(this.state)
		const { employees, countryState } = this.props
		const { firstName, lastName, gender, age, country, city, address, education } = this.state
		const value = { firstName, lastName, gender, age, country, city, address, education }
		if(employees){
			return(
				<div className='FirebaseCrud'>
					<Container fluid>
						<Row>
							<Col lg='12'>
								<FirebaseTable
									employees={employees} 
									getDataRow={this.getDataRow}
								/>
							</Col>
							<Col lg='7' className='mx-auto'>
								<Card>
									<CardBody>
										<FirebaseForm
											countryState={countryState}
											value={value}
											onChange={this.onChange}
											inputEmployee={this.inputEmployee}
											deleteEmployee={this.deleteEmployee}
											updateEmployee={this.updateEmployee}
										/>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			)
		}else{
			return(
				<div>
					Loading
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return{
		employees: state.firestore.ordered.employees,
		countryState: state.countryState.countries
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		inputEmployee: (newEmployee) => dispatch(inputEmployee(newEmployee)),
		deleteEmployee: (id) => dispatch(deleteEmployee(id)),
		updateEmployee: (employee) => dispatch(updateEmployee(employee))
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{
		collection: 'employees', orderBy: ['createdAt', 'desc']
	}])
	)(FirebaseCrud)