import React from 'react'
import { Table } from 'reactstrap'
class ReduxTable extends React.Component{
	render(){
		const { reduxTable } = this.props
		let number = 1
		return(
			<Table bordered hover striped responsive size='sm'>
				<thead>
					<tr>
						<th> No </th>
						<th> Name </th>
						<th> Username </th>
						<th> Email </th>
					</tr>
				</thead>
				<tbody>
					{reduxTable.map((data)=>{
						return(
							<tr key={data.id} onClick={() => this.props.getDataRow(data)}>
								<td> {number++} </td>
								<td> {data.name} </td>
								<td> {data.username} </td>
								<td> {data.email} </td>
							</tr>
						)
					})}
					
				</tbody>
			</Table>
		)
	}
}

export default ReduxTable