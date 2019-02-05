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
									<CardTitle> Auth </CardTitle>
									<CardText>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									</CardText>
								</CardBody>
							</Card>
						</Col>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardBody>
									<CardTitle> Menu </CardTitle>
									<CardText>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									</CardText>
								</CardBody>
							</Card>
						</Col>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardBody>
									<CardTitle> Sample Pages </CardTitle>
									<CardText>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									</CardText>
								</CardBody>
							</Card>
						</Col>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardBody>
									<CardTitle> Update Profile </CardTitle>
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

