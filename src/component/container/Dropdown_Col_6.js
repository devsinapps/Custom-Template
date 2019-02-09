import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Card, CardBody, CardHeader} from 'reactstrap'
class Dropdown_Col_6 extends React.Component{
	state = {
		isExpanded: true
	}

	toggle = () => {
		this.setState({
			isExpanded: !this.state.isExpanded,
			height: this.refs.inner.clientHeight + 40
		})
	}
	render(){
		const { isExpanded, height } = this.state
		const { title, children } = this.props
		const currentHeight = isExpanded ? height : '0'
		const styleDropdownInActive = {
			overflow: 'hidden',
			transition: 'all .3s',
			height: currentHeight + 'px'
		}

		const styleDropdownActive = {
			overflow: 'hidden',
			transition: 'all .3s',
			height: currentHeight + 'px',
			opacity: '0'
		}
		const styleDropdown = isExpanded ? styleDropdownInActive : styleDropdownActive

		return(
			<Col lg='6' md='6'>
				<Card className='mb-3'>
					<CardHeader> 
						{title}
						<span> <FontAwesomeIcon icon='bars' onClick={this.toggle}/> </span> 
					</CardHeader>
					<CardBody style={styleDropdown}>
						<div ref='inner'>
							{children}
						</div>
					</CardBody>
				</Card>
			</Col>
		)
	}
}

export default Dropdown_Col_6