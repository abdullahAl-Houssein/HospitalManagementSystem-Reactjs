

export function doctorReducer(
	state = [],
	action
) {
	switch (action.type) {
		case 'ADD_DOCTOR':
			return [...state, action.payload];
		case 'REMOVE_doctor':
			return state.filter((doctor) => {
				return doctor.id !== action.payload; 
			});
		case 'EDIT_DOCTOR': {
			const index = state.findIndex((doc) => doc.id == action.payload.id); 
			const editedState = [...state];
			editedState[index] = action.payload;
			return editedState	
		}
		default:
			return state;
	}
}
