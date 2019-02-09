import React from 'react'
//Component
import Auth from './../component/content/Auth'
import Dashboard from './../component/content/Dashboard'
import TableBootstrap from './../component/content/Table'
import BootstrapForm from './../component/content/Form'
import SettingView from './../component/content/Setting-View'
import Charts from './../component/content/Charts'
import UpdateProfile from './../component/content/Update-Profile'
	//Sample-pages
	import ReduxCrud from './../component/content/Sample-Pages/ReduxCrud'
	import FirebaseCrud from './../component/content/Sample-Pages/FirebaseCrud'
	import GriddleTable from './../component/content/Sample-Pages/GriddleTable'
//Layout
import TopNavigation from './../component/layout/TopNavigation'
import SideNavigation from './../component/layout/SideNavigation'
//Tools
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//Style
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCandyCane, faEnvelope, faPhone, faLeaf, faUserCircle, faAt, faLock, faEye, faEyeSlash, faUserAstronaut, faSearch, faBars,faAward, faCalendarPlus,faAngleLeft, faTachometerAlt, faChartPie, faFileAlt, faTable, faCogs, faSignInAlt, faSignOutAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faGithub, faGoogle,  faFacebook,  faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';  

library.add( faCandyCane, faEnvelope, faPhone, faLeaf, faUserCircle, faAt, faLock, faEye, faEyeSlash, faUserAstronaut, faSearch, faBars,faAward, faCalendarPlus,faAngleLeft, faTachometerAlt, faChartPie, faFileAlt, faTable, faCogs, faSignInAlt, faSignOutAlt, faAngleRight,  faGithubAlt, faGithub, faGoogle,  faFacebook,  faTwitter, faInstagram)
class Routes extends React.Component{
	state = {
		isExpanded: false,
		defaultColor: "#1e3799",
		updateColor: '',
		defaultCase: 1
	}

	changeColor = (e) => {
		e.preventDefault();
		const color = e.target.updateColor.value
		this.setState({
			updateColor: color
		})
	}

	toggle = () => {
		const Row_2 = document.getElementsByClassName('Row-2')[0];
		const content = document.getElementsByClassName('Content')[0];
		const topNav = document.getElementsByClassName('TopNavigation')[0];
		const btnSlider = document.getElementsByClassName('Btn-Slider')[0];
			  Row_2.classList.toggle('Row-2-Toggle')
			  content.classList.toggle('ContentSlider')
			  topNav.classList.toggle('TopNavigation-Toogle')
			  btnSlider.classList.toggle('Btn-Slider-Toggle')
		
			  
		this.setState({
			isExpanded: !this.state.isExpanded
		})
	}

	authCase = () => {	
		this.setState({
			defaultCase: 2
		})
	}

	backCase = (e) => {
		this.setState({
			defaultCase: e
		})
	}

	render(){
		console.log(this.state)
		const { profile } = this.props
		const { defaultColor, isExpanded, defaultCase } = this.state
		const colorNavbar = profile.navColor != null ? profile.navColor : defaultColor
		const currentClass = isExpanded ? 'active' : ''
		if(defaultCase === 1) {
			return(
				<BrowserRouter>
					<div className='Routes'>
						<TopNavigation 
							authCase={this.authCase}
						/>
						<SideNavigation
							colorNavbar={colorNavbar} 
							authCase={this.authCase}
							backCase={this.backCase}
						/>
						<div className='Content'>
							<button className='Btn-Slider' onClick={this.toggle}> 
								<FontAwesomeIcon icon='angle-left' className={`Btn-Slider-Icon`+ ` ` + currentClass}/>
							</button>
							<Switch>
								<Route path='/' component={Dashboard} exact />
								
								<Route path='/tablebootstrap' component={TableBootstrap} />
								<Route path='/formbootstrap' component={BootstrapForm} />
								<Route path='/charts' component={Charts} />
								//Sample Page
								<Route path='/reduxcrud' component={ReduxCrud} />
								<Route path='/firebasecrud' component={FirebaseCrud} />
								<Route path='/griddletable' component={GriddleTable} />
								
								//How To Send Props in Route Method (React router dom)
								<Route path='/SettingView' render={(routeProps) => (<SettingView {...routeProps} backCase={this.backCase}/> )}/>
								<Route path='/updateprofile' render={(routeProps) => (<UpdateProfile {...routeProps} backCase={this.backCase}/> )}/>
							</Switch>
						</div>
					</div>
				</BrowserRouter>
			)
		}else{
			return(
				<BrowserRouter>
					<div className='Routes'>
						<div className='ContentAuth'>
							<Switch>
								<Route path='/auth' render={(routeProps) => (<Auth {...routeProps} backCase={this.backCase}/> )}/>
							</Switch>
						</div>
					</div>
				</BrowserRouter>
			)
		}
		
	}
}

const mapStateToProps = (state) => {
	return{
		profile: state.firebase.profile
	}
}

export default compose(
		connect(mapStateToProps),
		firestoreConnect([{
			collection: 'users'
		}])
	)(Routes)