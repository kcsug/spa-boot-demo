const libraries = (state = {
	libraries: [],
	isFetching: false
}, action) => {
	switch (action.type) {
		case 'REQUEST_LIBRARIES':
			return Object.assign(
				{},
				state,
				{ isFetching: true }
			);
		case 'RECEIVE_LIBRARIES':
			return Object.assign(
				{},
				state,
				{
					isFetching: false,
					libraries: action.json
				}
			);
		default:
			return state;
	}
};

export default libraries;
