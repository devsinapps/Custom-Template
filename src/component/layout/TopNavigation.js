import React from 'react'
import img from './../../assets/images/default.png'
//Actions
import { signOut } from './../../store/actions/authActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, NavbarBrand, Button, Card, CardBody, CardTitle, CardFooter, CardText } from 'reactstrap'

class TopNavigation extends React.Component{
	state = {
		isExpanded: false
	}

	toggle = () => {
		this.setState({
			isExpanded: !this.state.isExpanded
		})
	}
	render(){
		const { isExpanded } = this.state
		const { auth, profile, colorNavbar } = this.props 
		const styleProfileAuth = isExpanded ? 'block' : 'none';
		const viewProfile = auth.uid != null ? 
							<div className='viewProfile'>
								<CardTitle> {profile.firstName + ' ' + profile.lastName }</CardTitle>
								<CardText> {profile.email} </CardText>
							</div>
							: 
							<div className='viewProfile'>
								<CardTitle>Guest</CardTitle>
							</div>
							;
		const btnLogOut = auth.uid != null ? <FontAwesomeIcon icon='sign-out-alt' onClick={this.props.signOut} className='btnSignOut' /> : null ;
		const btnLogIn = auth.uid == null ? 
						<Link to='/auth' onClick={this.props.authCase}>
						<FontAwesomeIcon icon='sign-in-alt' className='btnSignIn' /> 
						</Link>
						: 
						null 
						;
		return(
			<Navbar className='TopNavigation'>
				<div className='Menu'>
					<div className='Developt_Title' style={{backgroundColor: colorNavbar}}>
						<p> Development Mode </p>
					</div>
					<div className='Profile_Title'>
						<Button onClick={this.toggle} className='profileToggle'> 
							<FontAwesomeIcon icon='user-circle' />
						</Button> 
					</div>
					<div className='ProfileAuth' style={{display: styleProfileAuth}}>
						<Card>
							<CardBody>
								<img src={img} />
								{viewProfile}
							</CardBody>
							<CardFooter>
								{btnLogIn}
								{btnLogOut}
							</CardFooter>
						</Card>
					</div>
				</div>
			</Navbar>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return{
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signOut: () =>  dispatch(signOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavigation)