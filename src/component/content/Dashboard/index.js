import React from 'react'
import Loading from './../../../assets/images/Loading.png'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'
class Dashboard extends React.Component{
	state = {
		loading: false
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				loading: !this.state.loading
			})
		}, 2000)
	}
	render(){
		const { loading } = this.state
		if(loading){
			return(
				<div className='Dashboard'>
					<Container fluid>
						<Row>
							<Col lg='6'>
								<Card className='mb-3'>
									<CardBody>
										<CardTitle> Easy to Use </CardTitle>
										<CardText>
											Minimalist Design, So User can easily to use the Menu
											
										</CardText>
										<FontAwesomeIcon icon='pen-nib' />
									</CardBody>
								</Card>
							</Col>
							<Col lg='6'>
								<Card className='mb-3'>
									<CardBody>
										<CardTitle> Responsive Design </CardTitle>
										<CardText>
											Dinamic View
											
										</CardText>
										<FontAwesomeIcon icon='asterisk' />
									</CardBody>
								</Card>
							</Col>
							<Col lg='6'>
								<Card className='mb-3'>
									<CardBody>
										<CardTitle> Customize View </CardTitle>
										<CardText>
											User can change view, if the bored with default color
											
										</CardText>
										<FontAwesomeIcon icon='cogs' />
									</CardBody>
								</Card>
							</Col>
							<Col lg='6'>
								<Card className='mb-3'>
									<CardBody>
										<CardTitle> Feature Update  </CardTitle>
										<CardText>
											Update every week, New Menu And New Sample 

										</CardText>
										<FontAwesomeIcon icon='american-sign-language-interpreting' />
									</CardBody>
								</Card>
							</Col>
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

export default Dashboard

