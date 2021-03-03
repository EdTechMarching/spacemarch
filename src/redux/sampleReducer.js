const INITIAL_STATE = {
	currentPlay: null
}

const playReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "SET_CURRENT_PLAY":
			return {
				...state,
				currentPlay: action.payload
			}

		default:
			return {
				...state
			}
	}
}

export default playReducer
