import colorReducer from './colorReducer'
import countryStateReducer from './countryStateReducer'
import authReducer from './authReducer'
import reduxCrudReducer from './reduxCrudReducer'
import firebaseCrudReducer from './firebaseCrudReducer'
import settingViewReducer from './settingViewReducer'
import updateProfileReducer from './updateProfileReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
	colorList: colorReducer,
	countryState : countryStateReducer,
	settingView: settingViewReducer,
	updateProfile: updateProfileReducer,
	auth: authReducer,
	reduxTable: reduxCrudReducer,
	firebaseCrud: firebaseCrudReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
})

export default rootReducers