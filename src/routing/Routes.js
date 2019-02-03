import React from 'react'
//Component
import Auth from './../component/content/Auth'
import Dashboard from './../component/content/Dashboard'
import TableBootstrap from './../component/content/Table'
import BootstrapForm from './../component/content/Form'
import SettingView from './../component/content/Setting-View'
import Charts from './../component/content/Charts'
	//Sample-pages
	import ReduxCrud from './../component/content/Sample-Pages/ReduxCrud'
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
import { faSearch, faBars,faAward, faCalendarPlus,faAngleLeft, faTachometerAlt, faChartPie, faFileAlt, faTable, faCogs, faSignInAlt, faSignOutAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch, faBars,faAward, faCalendarPlus,faAngleLeft, faTachometerAlt, faChartPie, faFileAlt, faTable, faCogs, faSignInAlt, faSignOutAlt, faAngleRight)
class Routes extends React.Component{
	state = {
		defaultColor: "#1e3799",
		updateColor: ''
	}

	changeColor = (e) => {
		e.preventDefault();
		const color = e.target.updateColor.value
		this.setState({
			updateColor: color
		})
	}
	render(){
		
		const { profile } = this.props
		const { defaultColor } = this.state
		const colorNavbar = profile.navColor != null ? profile.navColor : defaultColor

		const sendProps = {
			pathName: '/settingview',
			colorNavbar: colorNavbar,
			changeColor: this.changeColor
		}
		return(
			<BrowserRouter>
				<div className='Routes'>
					<TopNavigation />
					<SideNavigation
						colorNavbar={colorNavbar} 
					/>
					<div className='Content'>
						<Switch>
							<Route path='/' component={Dashboard} exact />
							<Route path='/auth' component={Auth} />
							<Route path='/tablebootstrap' component={TableBootstrap} />
							<Route path='/formbootstrap' component={BootstrapForm} />
							<Route path='/charts' component={Charts} />
							//Sample Page
							<Route path='/reduxcrud' component={ReduxCrud} />
							<Route path='/griddletable' component={GriddleTable} />
							<Route path={sendProps} component={SettingView}/>
							
						</Switch>
					</div>
				</div>
			</BrowserRouter>
		)
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