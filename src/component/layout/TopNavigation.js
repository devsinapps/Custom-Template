import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

class TopNavigation extends React.Component{
	render(){
		return(
			<Navbar className='TopNavigation'>
				<NavbarBrand> Custom Template </NavbarBrand>
			</Navbar>
		)
	}
}

export default TopNavigation