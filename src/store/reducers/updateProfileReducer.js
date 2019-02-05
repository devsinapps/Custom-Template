const initState = {
	updateError: ''
}

const updateProfileReducer = ( state = initState, action ) => {
	switch(action.type){
		case "UPDATE_PROFILE_SUCCESS":
			console.log('UPDATE_PROFILE_SUCCESS')
			return{
				...state,
				updateError: ''
			}

		case "UPDATE_PROFILE_ERROR":
			console.log('UPDATE_PROFILE_ERROR')
			return{
				...state,
				updateError: 'UPDATE_PROFILE_ERROR'
			}

		default:
			return state
	}
}

export default updateProfileReducer