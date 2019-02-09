import React from 'react'
import Loading from './../../../assets/images/Loading.png'
import { BarChart, LineChart, DoghnutChart, HorizontalChart } from './ChartsSummary'
import { Container, Row, Col, Card, CardBody, CardHeader, Breadcrumb, BreadcrumbItem } from 'reactstrap'
class Charts extends React.Component{
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
		}else{
			return(
				<div className='Loading text-center'>
					<img src={Loading} />
				</div>
			)
		}
		
	}
}

export default Charts

class Summary extends React.Component{
	render(){
		const { title, children } = this.props
		return(
			<Col lg='6' md='6'>
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

