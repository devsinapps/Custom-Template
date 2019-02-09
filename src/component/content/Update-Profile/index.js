import React from 'react'
import Loading from './../../../assets/images/Loading.png'
//Actions
import { updateProfile } from './../../../store/actions/updateProfileActions'
//Assets
import img from './../../../assets/images/default.png'
//Component
import UpdateForm from './UpdateForm'
//Tools
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase'
//Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Card, CardBody, Button, CardFooter, CardTitle, CardText } from 'reactstrap'
class UpdateProfile extends React.Component{
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

	getProfile = (e) => {
		const { profileAuth, auth } = this.props
		this.setState({
			uid: auth.uid,
			firstName: profileAuth.firstName,
			lastName: profileAuth.lastName,
			gender: profileAuth.gender,
			age: profileAuth.age,
			navColor: profileAuth.navColor,
			email: profileAuth.email,
			phone: profileAuth.phone,
			initials: profileAuth.initials,
			createdAt: profileAuth.createdAt
		})
	}

	onChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	updateProfile = (e) => {
		e.preventDefault();
		const { uid, firstName, lastName, gender, age, navColor, email, phone, initials, createdAt } = this.state
		const profile = { uid, firstName, lastName, gender, age, navColor, email, phone, initials, createdAt }
		const check = window.confirm('Update Profile ?')
		if(check === true){
			this.props.updateProfile(profile)
		}else{
			return null
		}
	}
	render(){
		const { uid, firstName, lastName, gender, age, navColor, email, phone, initials, createdAt } = this.state
		const { profileAuth } = this.props 
		const value = { uid, firstName, lastName, gender, age, navColor, email, phone, initials, createdAt }
		const displayAction = uid.length > 0 ? 
								null 
								: 
								<CardFooter>
									<Button block onClick={this.getProfile}> Update Profile </Button>
								</CardFooter>
								;

		const displayUpdate = uid.length > 0 ?
								<Card className='mb-3'>
									<CardBody>
										<UpdateForm 
											value={value}
											profileAuth={profileAuth}
											onChange={this.onChange}
											updateProfile={this.updateProfile}
										/>
									</CardBody>
								</Card>
								: 
								null
								;

		const imgStyle = {
			height: '100px',
			width: '100px',
			borderRadius: '50%'
		}
		if(profileAuth){
			return(
				<div className='UpdateProfile'>
					<Container fluid>
						<Row>
							<Col lg='4' md='4' sm='4'>
								<Card className='mb-3'>
									<CardBody>
										<div className='text-center'>
											<img src={img} style={imgStyle}/>
											<CardTitle> {profileAuth.firstName + ' ' + profileAuth.lastName} </CardTitle>
										</div>
										<CardText> 
											<FontAwesomeIcon icon='candy-cane' />
											{profileAuth.gender} 
										</CardText>
										<CardText> 
											<FontAwesomeIcon icon='leaf' />
											{profileAuth.age} 
										</CardText>
										<CardText> 
											<FontAwesomeIcon icon='envelope' />
											{profileAuth.email} 
										</CardText>
										<CardText> 
											<FontAwesomeIcon icon='phone' />
											{profileAuth.phone} 
										</CardText>
									</CardBody>
									{displayAction}
								</Card>
							</Col>
							<Col lg='8' md='4' sm='4'>
								{displayUpdate}
							</Col>
						</Row>
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
										<CardTitle> Must Sign In to Setting Vie </CardTitle>
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
		profileAuth: profileAuth
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		updateProfile: (profile) => dispatch(updateProfile(profile))
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([{
		collection: 'users'
	}])
	)(UpdateProfile)