export const updateProfile = (profile) => {
	return(dispatch, getState, {getFirestore})=>{
		const firestore = getFirestore();

		firestore.collection('users').doc(profile.uid).set({
			firstName: profile.firstName,
			lastName: profile.lastName,
			gender: profile.gender,
			age: profile.age,
			navColor: profile.navColor,
			email: profile.email,
			phone: profile.phone,
			initials: profile.initials,
			createdAt: profile.createdAt
		}).then(()=>{
			dispatch({
				type: "UPDATE_PROFILE_SUCCESS"
			})
		}).catch((err)=>{
			dispatch({
				type: "UPDATE_PROFILE_ERROR",
				err
			})
		})
	}
}