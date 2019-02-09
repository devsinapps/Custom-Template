import React from 'react'
//Actions
import { updateView } from './../../../store/actions/settingViewActions'
//Component
import SettingForm from './SettingForm'
//Tools
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect, Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { Container, Row, Col, Card, CardBody, CardText, Breadcrumb, BreadcrumbItem, CardHeader, Button, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap'
class SettingView extends React.Component{
	state = {
		uid: '',
		firstName: '',
		lastName: '',
		gender: '',
		age: '',
		navColor: '',
		email: '',
		phone: '',
		initials: '',
		createdAt: ''
	}
	getProfileAuth = (profile) => {
		const { auth } = this.props
		this.setState({
			uid: auth.uid,
			firstName:profile.firstName,
			lastName:profile.lastName,
			gender:profile.gender,
			age:profile.age,
			navColor:profile.navColor,
			email:profile.email,
			phone:profile.phone,
			initials:profile.initials,
			createdAt:profile.createdAt
		})
	} 

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		const { uid, firstName, lastName, gender, age, navColor, email, phone, initials, createdAt } = this.state
		const profile = { uid, firstName, lastName, gender, age, navColor, email, phone, initials, createdAt } 
		this.props.updateView(profile)
	}
	render(){
		const { uid } = this.state
		const { auth, profileAuth, colorList } = this.props
		const { backCase } = this.props
		const viewUpdate = uid == '' ? 
							null 
							: 
							<Row>
								<Col lg='12'>
									<Card>
										<CardHeader>
											Sample Color
										</CardHeader>
										<CardBody>
											<Form onSubmit={this.onSubmit}>
												<Row form>
													{colorList.map((color)=>{
														return(
															<Col lg='1' md='1' sm='2' xs='2' key={color.colorCode}>
																<FormGroup check>
																	<Label check>
														                <Input type="radio" name="radio2" id="navColor" onChange={this.onChange} value={color.colorCode}/>{' '}
														                <div style={{backgroundColor: color.colorCode, width: '20px', height: '20px' }}> </div>
														              </Label>
																</FormGroup>
															</Col>
														)
													})}
												</Row>
												<div className='text-center'>
													<Button> Update </Button>
												</div>
											</Form>
										</CardBody>
									</Card>
								</Col>
							</Row>
							;
		if(profileAuth){
			return(
				<div className='SettingView'>
					<Container fluid>
						<Row>
							<Col lg='12'>
								<Breadcrumb> 
									<BreadcrumbItem active> Setting View </BreadcrumbItem>
								</Breadcrumb>
							</Col>
							<Col lg='12'>
								<Card className='mb-3'>
									<CardBody className='text-center'>
										<Button onClick={() => this.getProfileAuth(profileAuth)}> Update Color </Button>
									</CardBody>
								</Card>
							</Col>
						</Row>
						{viewUpdate}
					</Container>
				</div>
			)
		}else{
			return(
				<div className='authAlertCard'>
					<Container>
						<Row>
							<Col lg='4' className='mx-auto'>
								<Card>
									<CardBody>
										<CardTitle> Must Sign In For Setting View </CardTitle>
										<Link to='/auth' onClick={this.props.backCase}> Sign In </Link>
									</CardBody>
								</Card>
							</Col>
						</Row>
					</Container>
				</div>
			)
		}
		
	}
}

const mapStateToProps = (state) => {
	const uid = state.firebase.auth.uid
	const users = state.firestore.data.users
	const profileAuth = users ? users[uid] : null
	return{
		auth: state.firebase.auth,
		profileAuth: profileAuth,
		colorList: state.colorList
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		updateView: (profile) => dispatch(updateView(profile))
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{
		collection: 'users'
	}])
	)(SettingView)