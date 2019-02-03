import React from 'react'
//Actions
import { updateView } from './../../../store/actions/settingViewActions'
//Component
import SettingForm from './SettingForm'
//Tools
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
import { Container, Row, Col, Card, CardBody, CardText, Breadcrumb, BreadcrumbItem, CardHeader, Button } from 'reactstrap'
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
		// const updateColor = e.target.navColor.value
		this.setState({
			navColor: navColor
		})
		this.props.updateView(profile)
	}
	render(){
		console.log(this.state)
		const { navColor } = this.state
		const value = { navColor }
		const { auth, profileAuth, colorList } = this.props
		console.log(profileAuth)
		if(auth.uid == null) {
			alert('Must Sign In First')
			return <Redirect to='/auth' />
		}
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
							<Col lg='4'>
								<Card className='mb-3'>
									<CardHeader> Nav Color </CardHeader>
									<CardBody style={{backgroundColor: profileAuth.navColor}}>
										<Button onClick={()=> this.getProfileAuth(profileAuth)} > Update Color </Button>
									</CardBody>
								</Card>
							</Col>
							<Col lg='8'>
								<SettingForm 
									colorList={colorList}
									value={value}
									onChange={this.onChange}
									onSubmit={this.onSubmit}
								/>
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