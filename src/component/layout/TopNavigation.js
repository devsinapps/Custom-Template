import React from 'react'
//Actions
import { signOut } from './../../store/actions/authActions'
import { connect } from 'react-redux'
import { Navbar, NavbarBrand } from 'reactstrap'

class TopNavigation extends React.Component{
	render(){
		const { auth } = this.props 
		const btnLogOut = auth.uid != null ? <button onClick={this.props.signOut}> Log Out </button> : null ;
		return(
			<Navbar className='TopNavigation'>
				<NavbarBrand> Custom Template </NavbarBrand>
				{btnLogOut}
			</Navbar>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		signOut: () =>  dispatch(signOut())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavigation)