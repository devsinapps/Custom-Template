import React from 'react'
import { BarChart, LineChart, DoghnutChart, HorizontalChart } from './ChartsSummary'
import { Container, Row, Col, Card, CardBody, CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap'
class Charts extends React.Component{
	render(){
		return(
			<div className='Charts'>
				<Container fluid>
					<Row>
						<Col lg='12'>
							<Breadcrumb>
								<BreadcrumbItem active> Chart </BreadcrumbItem>
							</Breadcrumb>
						</Col>
						<Summary title='Bar Chart'>
							<BarChart />
						</Summary>
						<Summary title='Line Chart'>
							<LineChart />
						</Summary>
						<Summary title='Dough Chart'>
							<DoghnutChart />
						</Summary>
						<Summary title='Horizontal Chart'>
							<HorizontalChart />
						</Summary>
					</Row>
				</Container>
			</div>
		)
	}
}

export default Charts

class Summary extends React.Component{
	render(){
		const { title, children } = this.props
		return(
			<Col lg='6'>
				<Card className='mb-3'>
					<CardHeader> {title} </CardHeader>
					<CardBody>
						{children}
					</CardBody>
				</Card>
			</Col>
		)
	}
}

