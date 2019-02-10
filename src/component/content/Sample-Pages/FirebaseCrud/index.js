import React from 'react'
import Loading from './../../../../assets/images/Loading.png'
//Actions
import { inputEmployee, deleteEmployee, updateEmployee } from './../../../../store/actions/firebaseCrudActions'
//Component
import FirebaseTable from './FirebaseTable'
import FirebaseForm from './FirebaseForm'
//Container
import Dropdown_Col_12 from './../../../container/Dropdown_Col_12'
//Tools
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap'
class FirebaseCrud extends React.Component{
	state = {
		employeeId: '',
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
		this.setState({
			employeeId: employee.id,
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


	// Handle value from form input
	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	//Handle Input New Employee
	inputEmployee = (e) => {
		e.preventDefault();
		this.props.inputEmployee(this.state)
		// Handle State, if Success. Set Set to Default
		this.setState({
			employeeId: '',
			firstName: '',
			lastName: '',
			gender: '',
			age: '',
			country: '',
			city: '',
			address: '',
			education: '',
			createdAt: ''
		})
	}

	//Handle Delete Employee
	deleteEmployee = (e) => {
		const { employeeId } = this.state
		const check = window.confirm('Delete?')
		if(check === true){
			this.props.deleteEmployee(employeeId)
			// Handle State, if Success. Set Set to Default
			this.setState({
				employeeId: '',
				firstName: '',
				lastName: '',
				gender: '',
				age: '',
				country: '',
				city: '',
				address: '',
				education: '',
				createdAt: ''
			})
		}else{
			return null
		}
	}

	//Handle Update Employee
	updateEmployee = (e) => {
		const { employeeId, firstName, lastName, gender, age, country, city, address, education, createdAt } = this.state
		const employee = { employeeId, firstName, lastName, gender, age, country, city, address, education, createdAt }
		const check = window.confirm('Delete?')
		if(check === true){
			this.props.updateEmployee(employee)
			// Handle State, if Success. Set Set to Default
				this.setState({
					employeeId: '',
					firstName: '',
					lastName: '',
					gender: '',
					age: '',
					country: '',
					city: '',
					address: '',
					education: '',
					createdAt: ''
				})
		}else{
			return null
		}
		
	}

	//Handle Reset Button
	resetButton = () => {
		// Handle State, if Success. Set Set to Default
		this.setState({
			employeeId: '',
			firstName: '',
			lastName: '',
			gender: '',
			age: '',
			country: '',
			city: '',
			address: '',
			education: '',
			createdAt: ''
		})
	}
	render(){
		const { employees, countryState } = this.props
		const { employeeId, firstName, lastName, gender, age, country, city, address, education } = this.state
		const value = { employeeId, firstName, lastName, gender, age, country, city, address, education }
		if(employees){
			return(
				<div className='FirebaseCrud'>
					<Container fluid>
						<Row>
							<Col lg='12'>
								<Breadcrumb> 
									<BreadcrumbItem active> Crud Firebase </BreadcrumbItem>
								</Breadcrumb>
							</Col>
							<Dropdown_Col_12 title='Data Table'>
								<FirebaseTable
									employees={employees} 
									getDataRow={this.getDataRow}
								/>
							</Dropdown_Col_12>
							<Dropdown_Col_12 title='Data Table'>
								<FirebaseForm
									countryState={countryState}
									value={value}
									onChange={this.onChange}
									inputEmployee={this.inputEmployee}
									deleteEmployee={this.deleteEmployee}
									updateEmployee={this.updateEmployee}
									resetButton={this.resetButton}
								/>
							</Dropdown_Col_12>
						</Row>
					</Container>
				</div>
			)
		}else{
			return(
				<div className='Loading text-center'>
					<img src={Loading} />
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
		deleteEmployee: (employeeId) => dispatch(deleteEmployee(employeeId)),
		updateEmployee: (employee) => dispatch(updateEmployee(employee))
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{
		collection: 'employees', orderBy: ['createdAt', 'desc']
	}])
	)(FirebaseCrud)