import React from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
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
				<Row form>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor="name"> Name </Label>
							<Input
								id='name'
								value={value.name}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor="name"> Username </Label>
							<Input
								id='username'
								value={value.username}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
					<Col lg='4'>
						<FormGroup>
							<Label htmlFor="name"> Email </Label>
							<Input
								id='email'
								value={value.email}
								onChange={this.props.onChange}
							/>
						</FormGroup>
					</Col>
				</Row>
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