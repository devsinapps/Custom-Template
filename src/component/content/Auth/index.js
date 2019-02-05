import React from 'react'
//Actions
import { signOut } from './../../../store/actions/authActions'
//Component
import Signin from './SignIn'
import SignUp from './SignUp'
//Tools
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, CardBody, CardHeader } from 'reactstrap'
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
		const { backCase } = this.props.match.path.backCase
		const { defaultCase } = this.state
		const { auth } = this.props
		const viewAuth = defaultCase == 1 ? <Signin backCase={this.props.match.path.backCase}/> : <SignUp backCase={this.props.match.path.backCase}/>;
		return(
			<div className='Auth'>
				<Container fluid>
					<Row>
						<Col lg='6' className='mx-auto'>
							<Card>
								<CardHeader className='text-center'>
									<button onClick={this.signInCase}> Sign In </button>
									<button onClick={this.signUpCase}> Sign Up </button>
								</CardHeader>
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