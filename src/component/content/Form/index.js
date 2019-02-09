import React from 'react'
//Container
import Dropdown_Col_6 from './../../container/Dropdown_Col_6'
//Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loading from './../../../assets/images/Loading.png'
import { Container, Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, CustomInput, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap'
class BootstrapForm extends React.Component{
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
				<div className='BootstrapForm'>
					<Container fluid>
						<Row>
							<Col lg='12'>
								<Breadcrumb>
									<BreadcrumbItem active> Bootstrap Form </BreadcrumbItem>
								</Breadcrumb>
							</Col>
							<Dropdown_Col_6 title='Form'>
								<Form>
									<FormGroup>
										<Label htmlFor='email'> Email </Label>
										<Input type='email' />
									</FormGroup>
									<FormGroup>
										<Label htmlFor='password'> Password </Label>
										<Input type='password' />
									</FormGroup>
									<FormGroup>
										<Label htmlFor='select'> Select </Label>
										<Input type='select'>
											<option value=''> Select </option>
											<option value=''> 1 </option>
											<option value=''> 2 </option>
										</Input>
									</FormGroup>
									<FormGroup>
										<Label htmlFor='multiple'> Multiple Select </Label>
										<Input type='select' multiple>
											<option value=''> Select </option>
											<option value=''> 1 </option>
											<option value=''> 2 </option>
											<option value=''> 3 </option>
											<option value=''> 4 </option>
											<option value=''> 5 </option>
											<option value=''> 6 </option>
										</Input>
									</FormGroup>
									<FormGroup>
										<Label htmlFor='textarea'> Textarea </Label>
										<Input type='textarea' />
									</FormGroup>
									<FormGroup>
							          <Label for="exampleFile">File</Label>
							          <Input type="file" name="file" id="exampleFile" />
							        </FormGroup>
							        <FormGroup tag="fieldset">
							          <legend>Radio Buttons</legend>
							          <FormGroup check>
							            <Label check>
							              <Input type="radio" name="radio1" />{' '}
							              Option one is this and that—be sure to include why its great
							            </Label>
							          </FormGroup>
							          <FormGroup check>
							            <Label check>
							              <Input type="radio" name="radio1" />{' '}
							              Option two can be something else and selecting it will deselect option one
							            </Label>
							          </FormGroup>
							          <FormGroup check disabled>
							            <Label check>
							              <Input type="radio" name="radio1" disabled />{' '}
							              Option three is disabled
							            </Label>
							          </FormGroup>
							        </FormGroup>
							        <FormGroup check>
							          <Label check>
							            <Input type="checkbox" />{' '}
							            Check me out
							          </Label>
							        </FormGroup>
							        <Button>Submit</Button>
							    </Form>
							</Dropdown_Col_6>
							<Dropdown_Col_6 title='Form Grid '>
							<Form>
								<FormGroup row>
									<Label htmlFor='email' md={3}> Email </Label>
									<Col md={9}>
										<Input type='email' />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor='password' md={3}> Password </Label>
									<Col md={9}>
										<Input type='password' />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor='select' md={3}> Select </Label>
									<Col md={9}>
									<Input type='select'>
										<option value=''> Select </option>
										<option value=''> 1 </option>
										<option value=''> 2 </option>
									</Input>
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor='textarea' md={3}> Textarea </Label>
									<Col md={9}>
										<Input type='textarea' />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label htmlFor='file' md={3}> File </Label>
									<Col md={9}>
										<Input type='file' />
									</Col>
								</FormGroup>
						    </Form>

							</Dropdown_Col_6>
							<Dropdown_Col_6 title='Type'>
							<Form>
								<FormGroup>
									<Label htmlFor='number'> Email </Label>
									<Input type='number' />
								</FormGroup>
								<FormGroup>
									<Label htmlFor='datetime'> DateTime </Label>
									<Input type='datetime' />
								</FormGroup>
								<FormGroup>
									<Label htmlFor='date'> Date </Label>
									<Input type='date' />
								</FormGroup>
								<FormGroup>
									<Label htmlFor='time'> Time </Label>
									<Input type='time' />
								</FormGroup>
						        <Button>Submit</Button>
						    </Form>
							</Dropdown_Col_6>
							<Dropdown_Col_6 title='Form Frid with Row '>
							<Form>
								<Row form>
									<Col md={6}>
										<FormGroup>
											<Label htmlFor='email'> Email </Label>
											<Input type='email' />
										</FormGroup>
									</Col>
									<Col md={6}>
										<FormGroup>
											<Label htmlFor='datetime'> DateTime </Label>
											<Input type='datetime' />
										</FormGroup>
									</Col>
								</Row>
								<FormGroup>
									<Label htmlFor='date'> Date </Label>
									<Input type='date' />
								</FormGroup>
								<FormGroup>
									<Label htmlFor='time'> Time </Label>
									<Input type='time' />
								</FormGroup>
								<Row form>
									<Col md={4}>
										<FormGroup>
											<Label htmlFor='Country'> Country </Label>
											<Input type='text' />
										</FormGroup>
									</Col>
									<Col md={4}>
										<FormGroup>
											<Label htmlFor='city'> City </Label>
											<Input type='text' />
										</FormGroup>
									</Col>
									<Col md={4}>
										<FormGroup>
											<Label htmlFor='zip'> ZIP </Label>
											<Input type='text' />
										</FormGroup>
									</Col>
								</Row>
						        <Button>Submit</Button>
						    </Form>
							</Dropdown_Col_6>
							<Dropdown_Col_6 title='Type'>
							<Form>
								<Input placeholder="lg" bsSize="lg" />
						        <Input placeholder="default" />
						        <Input placeholder="sm" bsSize="sm" />
						        <Input type="select" bsSize="lg">
						          <option>Large Select</option>
						        </Input>
						        <Input type="select">
						          <option>Default Select</option>
						        </Input>
						        <Input type="select" bsSize="sm">
						          <option>Small Select</option>
						        </Input>
						    </Form>
							</Dropdown_Col_6>
							<Dropdown_Col_6 title='Custom Input'>
							<Form>
								<FormGroup>
						          <Label for="exampleCheckbox">Checkboxes</Label>
						          <div>
						            <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
						            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Or this one" />
						            <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="But not this disabled one" disabled />
						          </div>
						        </FormGroup>
						        <FormGroup>
						          <Label for="exampleCheckbox">Radios</Label>
						          <div>
						            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="Select this custom radio" />
						            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="Or this one" />
						            <CustomInput type="radio" id="exampleCustomRadio3" label="But not this disabled one" disabled />
						          </div>
						        </FormGroup>
						        <FormGroup>
						          <Label for="exampleCheckbox">Inline</Label>
						          <div>
						            <CustomInput type="checkbox" id="exampleCustomInline" label="An inline custom input" inline />
						            <CustomInput type="checkbox" id="exampleCustomInline2" label="and another one" inline />
						          </div>
						        </FormGroup>
						        <FormGroup>
						          <Label for="exampleCustomSelect">Custom Select</Label>
						          <CustomInput type="select" id="exampleCustomSelect" name="customSelect">
						            <option value="">Select</option>
						            <option>Value 1</option>
						            <option>Value 2</option>
						            <option>Value 3</option>
						            <option>Value 4</option>
						            <option>Value 5</option>
						          </CustomInput>
						        </FormGroup>
						        <FormGroup>
						          <Label for="exampleCustomMutlipleSelect">Custom Multiple Select</Label>
						          <CustomInput type="select" id="exampleCustomMutlipleSelect" name="customSelect" multiple>
						            <option value="">Select</option>
						            <option>Value 1</option>
						            <option>Value 2</option>
						            <option>Value 3</option>
						            <option>Value 4</option>
						            <option>Value 5</option>
						          </CustomInput>
						        </FormGroup>
						        <FormGroup>
						          <Label for="exampleCustomSelectDisabled">Custom Select Disabled</Label>
						          <CustomInput type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled>
						            <option value="">Select</option>
						            <option>Value 1</option>
						            <option>Value 2</option>
						            <option>Value 3</option>
						            <option>Value 4</option>
						            <option>Value 5</option>
						          </CustomInput>
						        </FormGroup>
						        <FormGroup>
						          <Label for="exampleCustomMutlipleSelectDisabled">Custom Multiple Select Disabled</Label>
						          <CustomInput type="select" id="exampleCustomMutlipleSelectDisabled" name="customSelect" multiple disabled>
						            <option value="">Select</option>
						            <option>Value 1</option>
						            <option>Value 2</option>
						            <option>Value 3</option>
						            <option>Value 4</option>
						            <option>Value 5</option>
						          </CustomInput>
						        </FormGroup>
						        <FormGroup>
						          <Label for="exampleCustomFileBrowser">File Browser</Label>
						          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" />
						        </FormGroup>
						        <FormGroup>
						          <Label for="exampleCustomFileBrowser">File Browser with Custom Label</Label>
						          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Yo, pick a file!" />
						        </FormGroup>
						        <FormGroup>
						          <Label for="exampleCustomFileBrowser">File Browser Disabled</Label>
						          <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" disabled />
						        </FormGroup>
						    </Form>
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

export default BootstrapForm
