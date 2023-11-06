export function staffReducer(
	state = [],
	action
) {
	switch (action.type) {
		case 'ADD_STAFF':
			return [...state, action.payload];
		case 'REMOVE_staff':
			return state.filter((staff) => {
				return staff.id !== action.payload; 
			});
		case 'EDIT_STAFF': {
			const index = state.findIndex((staff) => staff.id == action.payload.id); 
			const editedState = [...state];
			editedState[index].name = action.payload.name;
			return editedState	
		}
		default:
			return state;
	}
}
