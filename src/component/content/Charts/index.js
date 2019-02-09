import React from 'react'
import Loading from './../../../assets/images/Loading.png'
//Container
import Dropdown_Col_6 from './../../container/Dropdown_Col_6'
//Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
							<Dropdown_Col_6 title='Bar Chart'>
								<BarChart />
							</Dropdown_Col_6>
							<Dropdown_Col_6 title='Line Chart'>
								<LineChart />
							</Dropdown_Col_6>
							<Dropdown_Col_6 title='Dough Chart'>
								<DoghnutChart />
							</Dropdown_Col_6>
							<Dropdown_Col_6 title='Horizontal Chart'>
								<HorizontalChart />
							</Dropdown_Col_6>
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


