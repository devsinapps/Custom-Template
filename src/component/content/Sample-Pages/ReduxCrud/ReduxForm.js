import React from 'react'
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
class ReduxForm extends React.Component{
	render(){
		const { value } = this.props
		console.log(value)
		const enabled = value.id.length != '' &&
						value.name.length > 0 &&
						value.username.length > 0 && 
						value.email.length > 0 ;
		return(
			<Form onSubmit={this.props.onSubmit}>
				<FormGroup row>
					<Label htmlFor="name" md='3'> Name </Label>
					<Col md='9'>
						<Input
							id='name'
							value={value.name}
							onChange={this.props.onChange}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor="username" md='3'> Username </Label>
					<Col md='9'>
						<Input
							id='username'
							value={value.username}
							onChange={this.props.onChange}
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label htmlFor="email" md='3'> Email </Label>
					<Col md='9'>
						<Input
							id='email'
							value={value.email}
							onChange={this.props.onChange}
						/>
					</Col>
				</FormGroup>
				<FormGroup className='text-center'>
					<Label htmlFor="button" hidden> Button </Label>
					<Button color='primary' disabled={enabled}> Save </Button> {' '}
					<Button color='warning' onClick={this.props.updateData} disabled={!enabled}> Update </Button> {' '}
					<Button color='danger' onClick={this.props.deleteData} disabled={!enabled}> Delete </Button> {' '}
					<Button color='info'> Reset </Button> {' '}
				</FormGroup>
			</Form>
		)
	}
}

export default ReduxForm