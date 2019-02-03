import React from 'react'
import { Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap'
class SettingForm extends React.Component{
	// state = {
	// 	navColor: ''
	// }

	// onChange = (e) => {
	// 	this.setState({
	// 		[e.target.id]: e.target.value
	// 	})
	// }
	render(){
		// const { navColor } = this.state
		const { value, colorList } = this.props
		return(
		<Card className='mb-3'>
			<CardBody>
				<Form onSubmit={this.props.onSubmit}>
					<FormGroup>
						<Label htmlFor='navColor'> Nav Color </Label>
						<Input type='select' id='navColor' onChange={this.props.onChange}>
							<option value={value.navColor}> {value.navColor} </option>
							{colorList.map((color)=>{
								return(
									<option value={color.colorCode}> {color.colorName} </option>
								)
							})}
						</Input>
					</FormGroup>
					<FormGroup>
						<Button> Update </Button>
					</FormGroup>
				</Form>
			</CardBody>
		</Card>
		)
	}
}

export default SettingForm