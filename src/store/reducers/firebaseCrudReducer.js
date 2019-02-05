const initState = {
	firebaseError: ''
}

const firebaseCrudReducer = ( state = initState, action ) => {
	switch(action.type){
		case "INPUT_EMPLOYEE_SUCCESS":
			console.log('INPUT_EMPLOYEE_SUCCESS')
			return{
				...state,
				firebaseError: ''
			}

		case "INPUT_EMPLOYEE_ERROR":
			console.log('INPUT_EMPLOYEE_ERROR')
			return{
				...state,
				firebaseError: 'INPUT_EMPLOYEE_ERROR'
			}

		case "DELETE_EMPLOYEE_SUCCESS":
			console.log('DELETE_EMPLOYEE_SUCCESS')
			return{
				...state,
				firebaseError: ''
			}

		case "UPDATE_EMPLOYEE_SUCCESS":
			console.log('UPDATE_EMPLOYEE_SUCCESS')
			return{
				...state,
				firebaseError: ''
			}

		case "UPDATE_EMPLOYEE_ERROR":
			console.log('UPDATE_EMPLOYEE_ERROR')
			return{
				...state,
				firebaseError: 'UPDATE_EMPLOYEE_ERROR'
			}

		default:
			return state
	}
}

export default firebaseCrudReducer