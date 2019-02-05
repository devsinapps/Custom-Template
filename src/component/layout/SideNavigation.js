import React, { Component } from 'react'
//Tools
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//Component
import Dropdown from './Dropdown'
//Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SideNavigation extends Component{
	state = {
		isExpanded: false
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
		const { colorNavbar,auth } = this.props
		const currentClass = isExpanded ? 'active' : ''
		const authAction = auth.uid != null ? 
				<Dropdown title="Auth" icon='angle-right'>
					<ul>
						<li> 
							<FontAwesomeIcon icon='sign-in-alt' className='Dropdown_Menu_Icon' /> 
							<Link to='/auth' onClick={() => this.props.backCase(1)}> Authentication </Link> 
						</li>
					</ul>
				</Dropdown>
				:
			  	<Dropdown title="Auth" icon='angle-right'>
					<ul>
						<li> 
							<FontAwesomeIcon icon='sign-in-alt' className='Dropdown_Menu_Icon' /> 
							<Link to='/auth' onClick={this.props.authCase}> Authentication </Link> 
						</li>
					</ul>
				</Dropdown>
				;
		return(
			<div className='SideNavigation'>
				<div className='Row-1' style={{backgroundColor: colorNavbar}}>
					<ul>
						<li> <FontAwesomeIcon icon='user-astronaut' onClick={this.toggleRow}/> </li>
					</ul>
				</div>
				<div className='Row-2' style={{backgroundColor: colorNavbar}}>
					<ul>
						<li className='Main_Title_Row_2'> List Menu </li>
					</ul>
					<div className='Menu'>
						<ul>
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
										<Link to='/charts'>
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
										<Link to='/reduxcrud'> Redux Crud  </Link> 
									</li>
									<li> 
										<FontAwesomeIcon icon='cogs' className='Dropdown_Menu_Icon' /> 
										<Link to='/firebasecrud'> Firebase Crud  </Link> 
									</li>
								</ul>
							</Dropdown>
							<Dropdown title="View" icon='angle-right'>
								<ul>
									<li> 
										<FontAwesomeIcon icon='cogs' className='Dropdown_Menu_Icon' /> 
										<Link to='/settingview'> Setting View </Link> 
									</li>
									<li> 
										<FontAwesomeIcon icon='cogs' className='Dropdown_Menu_Icon' /> 
										<Link to='/updateprofile'> Update Profile </Link> 
									</li>
								</ul>
							</Dropdown>
							{authAction}
						</ul>
					</div>
				</div>
				<div className='Row-1-Result'>
					<div className='left'>
						<ul>
							<li> <Link to='/'> About Developer </Link> </li>
							<li> 
								<a href='https://github.com/wayscode' target="__blank">
									<FontAwesomeIcon icon={['fab', 'github']} />
								</a>
								<a href='https://www.instagram.com/ways.code/' target="__blank">
									<FontAwesomeIcon icon={['fab', 'instagram']} />
								</a>
								<a href='https://www.facebook.com/sandy.kurniawan.9028' target="__blank">
									<FontAwesomeIcon icon={['fab', 'facebook']} />
								</a>
							</li>
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

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth
	}
}

export default connect(mapStateToProps)(SideNavigation)

