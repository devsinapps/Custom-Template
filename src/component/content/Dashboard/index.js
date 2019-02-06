import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'
class Dashboard extends React.Component{
	render(){
		return(
			<div className='Dashboard'>
				<Container fluid>
					<Row>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardBody>
									<CardTitle> Easy to Use </CardTitle>
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
									<CardTitle> Custom Color </CardTitle>
									<CardText>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									</CardText>
								</CardBody>
							</Card>
						</Col>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardBody>
									<CardTitle> Update Feature </CardTitle>
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
	}
}

export default Dashboard

