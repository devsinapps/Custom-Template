import React from 'react'
import Loading from './../../../assets/images/Loading.png'
import { connect } from 'react-redux'
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
										<CardTitle> Easy tos Use </CardTitle>
										<CardText>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										</CardText>
									</CardBody>
								</Card>
							</Col>
							<Col lg='6'>
								<Card className='mb-3'>
									<CardBody>
										<CardTitle> Responsive Design </CardTitle>
										<CardText>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										</CardText>
									</CardBody>
								</Card>
							</Col>
							<Col lg='6'>
								<Card className='mb-3'>
									<CardBody>
										<CardTitle> Customize View </CardTitle>
										<CardText>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										</CardText>
									</CardBody>
								</Card>
							</Col>
							<Col lg='6'>
								<Card className='mb-3'>
									<CardBody>
										<CardTitle> Feature Update  </CardTitle>
										<CardText>
										Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										</CardText>
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

