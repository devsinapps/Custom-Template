import React from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
class ReduxForm extends React.Component{
	render(){
		const { value } = this.props
		return(
			<Form onSubmit={this.props.onSubmit}>
				<FormGroup>
					<Label htmlFor="name"> Name </Label>
					<Input
						id='name'
						value={value.name}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="username"> Username </Label>
					<Input
						id='username'
						value={value.username}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup>
					<Label htmlFor="email"> Email </Label>
					<Input
						id='email'
						value={value.email}
						onChange={this.props.onChange}
					/>
				</FormGroup>
				<FormGroup className='text-center'>
					<Label htmlFor="button" hidden> Button </Label>
					<Button color='primary'> Save </Button> {' '}
					<Button color='warning' onClick={this.props.updateData}> Update </Button> {' '}
					<Button color='danger' onClick={this.props.deleteData}> Delete </Button> {' '}
					<Button color='info'> Reset </Button> {' '}
				</FormGroup>
			</Form>
		)
	}
}

export default ReduxForm