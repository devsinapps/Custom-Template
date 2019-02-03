export const inputData = (data) => {
	return(dispatch)=>{
		dispatch({
			type: "INPUT_DATA_SUCCESS",
			data
		})
	}
}


export const deleteData = (id) => {
	return(dispatch)=>{
		dispatch({
			type: "DELETE_DATA_SUCCESS",
			id
		})
	}
}


export const updateData = (data) => {
	return(dispatch)=>{
		dispatch({
			type: "UPDATE_DATA_SUCCESS",
			id: data.id,
			data
		})
	}
}