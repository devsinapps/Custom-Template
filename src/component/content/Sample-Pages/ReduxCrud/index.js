import React from 'react'
//Actions
import { inputData } from './../../../../store/actions/reduxCrudActions'
import { deleteData } from './../../../../store/actions/reduxCrudActions'
import { updateData } from './../../../../store/actions/reduxCrudActions'
//Component
import ReduxTable from './ReduxTable'
import ReduxForm from './ReduxForm'
//Tools
import { connect } from 'react-redux'
import { Container, Row, Col, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap'
class ReduxCrud extends React.Component{
	state = {
		id: '',
		name: '',
		username: '',
		email: ''
	}

	getDataRow = (data) => {
		this.setState({
			id: data.id,
			name: data.name,
			username: data.username,
			email: data.email
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const name = e.target.name.value
		const username = e.target.username.value
		const email = e.target.email.value
		const data = {
			id: new Date(),
			name: name,
			username: username,
			email: email
		}
		this.props.inputData(data)
	}

	deleteData = () => {
		const { id } = this.state
		const check = window.confirm('Update Data ?')
		if(check === true){
			this.props.deleteData(id)
		}else{
			return null
		}
	}

	updateData = (e) => {
		e.preventDefault();
		const { id, name, username, email } = this.state
		const check = window.confirm('Update Data ?')
		if(check === true){
			const data = {
				id: id,
				updateName: name,
				updateUsername: username,
				updateEmail: email
			}
			this.props.updateData(data)
		}else{
			return null
		}
		
	}
	render(){
		
		const { id, name, username, email } = this.state
		const { reduxTable } = this.props
		const value = { id, name, username, email }
		return(
			<div className='ReduxCrud'>
				<Container fluid>
					<Row>
						<Col lg='12'>
							<Breadcrumb> 
								<BreadcrumbItem active> Crud Single Page </BreadcrumbItem>
							</Breadcrumb>
						</Col>
						<Col lg='12'>
							<ReduxTable 
								reduxTable={reduxTable}
								getDataRow={this.getDataRow}
							/>
						</Col>
						<Col lg='12'>
							<Breadcrumb> 
								<BreadcrumbItem active> Form Actions </BreadcrumbItem>
							</Breadcrumb>
						</Col>
						<Col lg='8' className='mx-auto'>
							<Card className='mb-3'>
								<CardBody>
									<ReduxForm 
										value={value}
										onChange={this.onChange}
										onSubmit={this.onSubmit}
										deleteData={this.deleteData}
										updateData={this.updateData}
									/>
								</CardBody>
							</Card>
						</Col>
						
					</Row>
				</Container>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		reduxTable: state.reduxTable
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		inputData: (data) =>  dispatch(inputData(data)),
		deleteData: (id) =>  dispatch(deleteData(id)),
		updateData: (data) =>  dispatch(updateData(data))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCrud)