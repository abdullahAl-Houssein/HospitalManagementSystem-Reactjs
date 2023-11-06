export function userReducer(state = null, action) {
	switch (action.type) {
		case 'LOGGED_IN_USER':
			return action.payload;
		case 'LOG_OUT':
			return action.payload;
		default:
			return state;
	}
}
