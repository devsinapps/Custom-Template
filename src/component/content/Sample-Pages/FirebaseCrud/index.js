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
		const { employees, countryState } = this.props
		const { firstName, lastName, gender, age, country, city, address, education } = this.state
		const value = { firstName, lastName, gender, age, country, city, address, education }
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