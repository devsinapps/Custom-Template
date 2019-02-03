import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
class TopNavigation extends React.Component{
	toggleSlider = () => {
		const content = document.getElementsByClassName('Content')[0];
		const sideNav = document.getElementsByClassName('SideNavigation')[0];
		const listMenu = document.getElementsByClassName('listMenu')[0];
			  content.classList.toggle('ContentSlider')
			  sideNav.classList.toggle('SideNavigationSlider')
			  listMenu.classList.toggle('listMenuSlider')
	}
	render(){
		return(
			<Navbar className='TopNavigation'>
				<NavbarBrand onClick={this.toggleSlider}> Zoo </NavbarBrand>
			</Navbar>
		)
	}
}

export default TopNavigation