import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, CardHeader, CardBody, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap'
class TableBootstrap extends React.Component{
	render(){
		const { table } = this.props
		let number = 1
		return(
			<div className='TableBootstrap'>
				<Container fluid>
					<Row>
						<Col lg='12'>
							<Breadcrumb>
								<BreadcrumbItem active> Bootstrap Table </BreadcrumbItem>
							</Breadcrumb>
						</Col>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardHeader> Table </CardHeader>
								<CardBody>
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
								</CardBody>
							</Card>
						</Col>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardHeader> .hover & .responsive </CardHeader>
								<CardBody>
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
								</CardBody>
							</Card>
						</Col>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardHeader> .bordered & .responsive </CardHeader>
								<CardBody>
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
								</CardBody>
							</Card>
						</Col>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardHeader> .striped & .responsive </CardHeader>
								<CardBody>
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
								</CardBody>
							</Card>
						</Col>
						<Col lg='6'>
							<Card className='mb-3'>
								<CardHeader> .bordered & .striped & .responsive & size='sm' </CardHeader>
								<CardBody>
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
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		table: state.tablebootstrap
	}
}


export default connect(mapStateToProps)(TableBootstrap)

