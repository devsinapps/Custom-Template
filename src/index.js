import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routing/Routes'
import './style/minify/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import thunk from 'redux-thunk'
import rootReducers from './store/reducers/rootReducers'
import firebaseConfig from './config/firebaseConfig'

const store = createStore(rootReducers,
		compose(
			applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
			reduxFirestore(firebaseConfig),
			reactReduxFirebase(firebaseConfig,{useFirestoreForProfile: true, userProfile:'users', attachAuthIsReady: true})
		)
	)

ReactDOM.render(
	<Provider store={store}>
	<Routes />
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();
