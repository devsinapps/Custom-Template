import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Dropdown extends React.Component{
	state = {
		isExpanded: false
	}

	toggleDropdown = () => {
		console.log(this.refs.inner.clientHeight)
		this.setState({
			isExpanded: !this.state.isExpanded,
			currentHeight: this.refs.inner.clientHeight
		})
	}
	render(){
		const { isExpanded, currentHeight } = this.state
		const { icon, title, children } = this.props
		const Height = isExpanded ? currentHeight : '0' 
		const currentClass = isExpanded ? 'active' : ''
		return(
			<div className='Dropdown'>
				<li onClick={this.toggleDropdown} className={currentClass}> 
					<a className='listMenu'> {title} </a>
					<FontAwesomeIcon icon={icon} className={`Dropdown-Icon`+' '+currentClass}/>
				</li>
				<div className='Dropdown_Menu' style={{height: Height+'px'}}>
					<div className='Menu' ref='inner'>
						{children}
					</div>
				</div>
			</div>
		)
	}
}

export default Dropdown