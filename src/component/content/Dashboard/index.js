import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
class Dashboard extends React.Component{
	render(){
		return(
			<div className='Dashboard'>
				<Container>
					<Row>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardBody>
								</CardBody>
							</Card>
						</Col>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardBody>
								</CardBody>
							</Card>
						</Col>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardBody>
								</CardBody>
							</Card>
						</Col>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardBody>
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

