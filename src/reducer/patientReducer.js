export function patientReducer(state = [], action) {
	switch (action.type) {
		case 'PATIENT_ADDED':
			return [...state,action.payload];
		case 'PATIENT_EDIT': {
				const index = state.findIndex((p) => p.id == action.payload.id); 
				const editedState = [...state];
				editedState[index] = action.payload;
				return editedState	
		}
		case 'PATIENT_REMOVE':
			return state.filter((patient) => {
				return patient.id !== action.payload; 
			});
		default:
			return state;
	}
}
