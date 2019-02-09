import React from 'react'
import Loading from './../../../assets/images/Loading.png'
import { connect } from 'react-redux'
//Container
import Dropdown_Col_6 from './../../container/Dropdown_Col_6'
//Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Card, CardHeader, CardBody, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap'
class TableBootstrap extends React.Component{
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
				<div className='TableBootstrap'>
					<Container fluid>
						<Row>
							<Col lg='12'>
								<Breadcrumb>
									<BreadcrumbItem active> Bootstrap Table </BreadcrumbItem>
								</Breadcrumb>
							</Col>
							<Dropdown_Col_6 title='Table'>
								<Table>
									<thead>
										<tr>
											<th> No </th>
											<th> Name </th>
											<th> Username </th>
											<th> Email </th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td> 1 </td>
											<td> John Doe </td>
											<td> JohnDoe </td>
											<td> JohnDoe@xyz.com </td>
										</tr>
										<tr>
											<td> 2 </td>
											<td> Jane Doe </td>
											<td> JaneDoe </td>
											<td> JaneDoe@mail.com </td>
										</tr>
										<tr>
											<td> 3 </td>
											<td> Sam Witwicky </td>
											<td> Witwicky </td>
											<td> LadiesMan@hosting.com </td>
										</tr>
									</tbody>
								</Table>
							</Dropdown_Col_6>
							<Dropdown_Col_6 title='.hover & .responsive'>
								<Table hover responsive>
									<thead>
										<tr>
											<th> No </th>
											<th> Name </th>
											<th> Username </th>
											<th> Email </th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td> 1 </td>
											<td> John Doe </td>
											<td> JohnDoe </td>
											<td> JohnDoe@xyz.com </td>
										</tr>
										<tr>
											<td> 2 </td>
											<td> Jane Doe </td>
											<td> JaneDoe </td>
											<td> JaneDoe@mail.com </td>
										</tr>
										<tr>
											<td> 3 </td>
											<td> Sam Witwicky </td>
											<td> Witwicky </td>
											<td> LadiesMan@hosting.com </td>
										</tr>
									</tbody>
								</Table>
							</Dropdown_Col_6>
							<Dropdown_Col_6 title='.bordered & .responsive'>
								<Table bordered responsive>
									<thead>
										<tr>
											<th> No </th>
											<th> Name </th>
											<th> Username </th>
											<th> Email </th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td> 1 </td>
											<td> John Doe </td>
											<td> JohnDoe </td>
											<td> JohnDoe@xyz.com </td>
										</tr>
										<tr>
											<td> 2 </td>
											<td> Jane Doe </td>
											<td> JaneDoe </td>
											<td> JaneDoe@mail.com </td>
										</tr>
										<tr>
											<td> 3 </td>
											<td> Sam Witwicky </td>
											<td> Witwicky </td>
											<td> LadiesMan@hosting.com </td>
										</tr>
									</tbody>
								</Table>
							</Dropdown_Col_6>
							<Dropdown_Col_6 title='striped & .responsive '>
								<Table striped responsive>
									<thead>
										<tr>
											<th> No </th>
											<th> Name </th>
											<th> Username </th>
											<th> Email </th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td> 1 </td>
											<td> John Doe </td>
											<td> JohnDoe </td>
											<td> JohnDoe@xyz.com </td>
										</tr>
										<tr>
											<td> 2 </td>
											<td> Jane Doe </td>
											<td> JaneDoe </td>
											<td> JaneDoe@mail.com </td>
										</tr>
										<tr>
											<td> 3 </td>
											<td> Sam Witwicky </td>
											<td> Witwicky </td>
											<td> LadiesMan@hosting.com </td>
										</tr>
									</tbody>
								</Table>
							</Dropdown_Col_6>
							<Dropdown_Col_6 title='.bordered & .striped & .responsive & size="sm" '>
								<Table bordered striped responsive size='sm'>
									<thead>
										<tr>
											<th> No </th>
											<th> Name </th>
											<th> Username </th>
											<th> Email </th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td> 1 </td>
											<td> John Doe </td>
											<td> JohnDoe </td>
											<td> JohnDoe@xyz.com </td>
										</tr>
										<tr>
											<td> 2 </td>
											<td> Jane Doe </td>
											<td> JaneDoe </td>
											<td> JaneDoe@mail.com </td>
										</tr>
										<tr>
											<td> 3 </td>
											<td> Sam Witwicky </td>
											<td> Witwicky </td>
											<td> LadiesMan@hosting.com </td>
										</tr>
									</tbody>
								</Table>
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

const mapStateToProps = (state) => {
	return{
		table: state.tablebootstrap
	}
}


export default connect(mapStateToProps)(TableBootstrap)


