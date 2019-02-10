export const inputEmployee = (newEmployee) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('employees').add({
			...newEmployee,
			firstName: newEmployee.firstName,
			lastName: newEmployee.lastName,
			gender: newEmployee.gender,
			age: newEmployee.age,
			country: newEmployee.country,
			city: newEmployee.city,
			address: newEmployee.address,
			education: newEmployee.education,
			createdAt: new Date()
		}).then(()=>{
			dispatch({
				type: "INPUT_EMPLOYEE_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "INPUT_EMPLOYEE_ERROR",
				err
			})
		})
	}
}

export const deleteEmployee = (employeeId) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('employees').doc(employeeId).delete().then(()=>{
			dispatch({
				type: "DELETE_EMPLOYEE_SUCCESS"
			})
		})
	}
}

export const updateEmployee = (employee) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('employees').doc(employee.employeeId).set({
			firstName: employee.firstName,
			lastName: employee.lastName,
			gender: employee.gender,
			age: employee.age,
			country: employee.country,
			city: employee.city,
			address: employee.address,
			education: employee.education,
			createdAt: employee.createdAt
		}).then(()=>{
			dispatch({
				type: "UPDATE_EMPLOYEE_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_EMPLOYEE_ERROR",
				err
			})
		})
	}
}