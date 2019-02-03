const initState = {
	setError: ''
}

const settingViewReducer = ( state = initState, action ) => {
	switch(action.type){
		case "UPDATE_VIEW_SUCCESS":
			console.log("UPDATE_VIEW_SUCCESS")
			return{
				...state,
				setError: ''
			}

		case "UPDATE_VIEW_ERROR":
			console.log("UPDATE_VIEW_ERROR")
			return{
				...state,
				setError: 'UPDATE_VIEW_ERROR'
			}

		default:
			return state
	}
}

export default settingViewReducer