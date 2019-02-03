import React from 'react'
//Actions
import { signOut } from './../../../store/actions/authActions'
//Component
import Signin from './SignIn'
import SignUp from './SignUp'
//Tools
import { connect } from 'react-redux'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
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
		const { auth } = this.props
		const btnSIgnOut = auth.uid !== null ? <button onClick={this.props.signOut}> Log Out </button> : null;
		const viewAuth = defaultCase == 1 ? <Signin /> : <SignUp />;
		return(
			<div className='Auth'>
				<Container fluid>
					<Row>
						<Col lg='6' className='mx-auto'>
							<button onClick={this.signInCase}> Sign In </button>
							<button onClick={this.signUpCase}> Sign Up </button>
							<Card>
								<CardBody>
									{viewAuth}
								</CardBody>
								{btnSIgnOut}
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
		console.log(state)
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