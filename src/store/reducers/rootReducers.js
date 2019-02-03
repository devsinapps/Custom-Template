import colorReducer from './colorReducer'
import authReducer from './authReducer'
import reduxCrudReducer from './reduxCrudReducer'
import settingViewReducer from './settingViewReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
	colorList: colorReducer,
	settingView: settingViewReducer,
	auth: authReducer,
	reduxTable: reduxCrudReducer,
	firestore: firestoreReducer,
	firebase: firebaseReducer
})

export default rootReducers