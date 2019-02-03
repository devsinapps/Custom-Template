import React, { Component } from 'react'
//Tools
import { Link } from 'react-router-dom'
//Component
import Dropdown from './Dropdown'
//Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SideNavigation extends Component{
	state = {
		isExpanded: false
	}

	toggle = () => {
		const Row_2 = document.getElementsByClassName('Row-2')[0];
			  Row_2.classList.toggle('Row-2-Toggle')

		const content = document.getElementsByClassName('Content')[0];
		const topNav = document.getElementsByClassName('TopNavigation')[0];
			  content.classList.toggle('ContentSlider')
			  topNav.classList.toggle('TopNavigation-Toogle')
		this.setState({
			isExpanded: !this.state.isExpanded
		})
	}

	toggleRow = () => {
		const left = document.getElementsByClassName('left')[0];
		const right = document.getElementsByClassName('right')[0];
			  left.classList.toggle('left-toggle')
			  right.classList.toggle('right-toggle')
	}

	removeToggle = () => {
		const left = document.getElementsByClassName('left')[0];
		const right = document.getElementsByClassName('right')[0];
			  left.classList.remove('left-toggle')
			  right.classList.remove('right-toggle')
	}
	render(){
		const { isExpanded } = this.state
		const { colorNavbar } = this.props
		const currentClass = isExpanded ? 'active' : ''
		return(
			<div className='SideNavigation'>
				<div className='Row-1' style={{backgroundColor: colorNavbar}}>
					<ul>
						<li> <FontAwesomeIcon icon='search' onClick={this.toggleRow}/> </li>
						<li> <FontAwesomeIcon icon='calendar-plus' onClick={this.toggleRow} /> </li>
						<li> <FontAwesomeIcon icon='bars' onClick={this.toggleRow} /> </li>
					</ul>
				</div>
				<div className='Row-2' style={{backgroundColor: colorNavbar}}>
					<ul>
						<li className='Main_Title_Row_2'> List Menu </li>
						<Dropdown title="Menu" icon='angle-right'>
							<ul>
								<li> 
									<FontAwesomeIcon icon='tachometer-alt' className='Dropdown_Menu_Icon'/> 
									<Link to='/'>
										Dashboard 
									</Link> 
								</li>
								<li> 
									<FontAwesomeIcon icon='chart-pie' className='Dropdown_Menu_Icon' /> 
									<Link to='/'>
										Chart 
									</Link> 
								</li>
								<li> 
									<FontAwesomeIcon icon='file-alt' className='Dropdown_Menu_Icon' /> 
									<Link to='/formbootstrap'>
										Form
									</Link> 
								</li>
								<li> 
									<FontAwesomeIcon icon='table' className='Dropdown_Menu_Icon' /> 
									<Link to='/tablebootstrap'>
										Table 
									</Link> 
								</li>
							</ul>
						</Dropdown>
						<Dropdown title="Sample Pages" icon='angle-right'>
							<ul>
								<li> 
									<FontAwesomeIcon icon='cogs' className='Dropdown_Menu_Icon' /> 
									<Link to='/reduxcrud'> Table Form  </Link> 
								</li>
							</ul>
						</Dropdown>
						<Dropdown title="View" icon='angle-right'>
							<ul>
								<li> 
									<FontAwesomeIcon icon='cogs' className='Dropdown_Menu_Icon' /> 
									<Link to='/settingview'> Setting View </Link> 
								</li>
							</ul>
						</Dropdown>
						<Dropdown title="Auth" icon='angle-right'>
							<ul>
								<li> 
									<FontAwesomeIcon icon='sign-in-alt' className='Dropdown_Menu_Icon' /> 
									<Link to='/auth'> Sign In </Link> 
								</li>
							</ul>
						</Dropdown>
					</ul>
					<button className='Btn-Slider' onClick={this.toggle}> 
						<FontAwesomeIcon icon='angle-left' className={`Btn-Slider-Icon`+ ` ` + currentClass}/>
					</button>
				</div>
				<div className='Row-1-Result'>
					<div className='left'>
						<ul>
							<li> <Link to='/'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </Link> </li>
							<li> <Link to='/'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </Link> </li>
							<li> <Link to='/'> Lorem Ipsum is simply dummy text of the printing and typesetting industry </Link> </li>
						</ul>
					</div>
					<div className='right' onClick={this.removeToggle}>
					</div>
				</div>
				<div className='toggle_Row'>
				</div>
			</div>
		)
	}
}

export default SideNavigation

