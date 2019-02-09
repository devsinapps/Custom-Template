import React from 'react'
//Actions
import { signOut } from './../../../store/actions/authActions'
//Component
import Signin from './SignIn'
import SignUp from './SignUp'
//Tools
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, CardHeader, Button } from 'reactstrap'
class Auth extends React.Component{
	state = {
		defaultCase: 1
	}

	signUpCase = () => {
		this.setState({
			defaultCase: 2
		})
	}

	signInCase = () => {
		this.setState({
			defaultCase: 1
		})
	}
	render(){
		const { defaultCase } = this.state
		const { auth, backCase } = this.props
		const viewAuth = defaultCase == 1 ? <Signin backCase={backCase}/> : <SignUp backCase={backCase}/>;
		return(
			<div className='Auth'>
				<Container fluid>
					<Row>
						<Col lg='5' md='7' sm='7' xs='12' className='mx-auto'>
							<div className='button_action'>
								<Button onClick={this.signInCase}> Sign In </Button>
								<Button onClick={this.signUpCase}> Sign Up </Button>
							</div>
							<Card>
								<CardBody>
									{viewAuth}
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
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signOut: () => dispatch(signOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)