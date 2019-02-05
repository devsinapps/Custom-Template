import React, { Component } from 'react'
import { Table } from 'reactstrap'
import moment from 'moment'
class FirebaseTable extends Component{

	render(){
		const { employees } = this.props
		let number = 1
		return(
			<Table bordered striped hover responsive size='sm'>
				<thead>
					<tr>
						<th> No </th>
						<th> First Name </th>
						<th> Last Name </th>
						<th> Age </th>
						<th> Gender </th>
						<th> Country </th>
						<th> City </th>
						<th> Address </th>
						<th> Education </th>
						<th> Join Date </th>
					</tr>
				</thead>
				<tbody>
					{employees.map((employee)=>{
						return(
							<tr key={employee.id} onClick={() => this.props.getDataRow(employee)}>
								<td> {number++} </td>
								<td> {employee.firstName} </td>
								<td> {employee.lastName} </td>
								<td> {employee.age} </td>
								<td> {employee.gender} </td>
								<td> {employee.country} </td>
								<td> {employee.city} </td>
								<td> {employee.address} </td>
								<td> {employee.education} </td>
								<td> {moment(employee.createdAt.toDate().toString()).calendar()} </td>
							</tr>
						)
					})}
					
				</tbody>
			</Table>
		)
	}
}

export default FirebaseTable