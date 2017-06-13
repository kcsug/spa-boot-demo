const library = (state = {
	assets: [],
	author: '',
	description: '',
	filename: '',
	homepage: '',
	keywords: '',
	latest: '',
	license: '',
	name: '',
	repository: '',
	version: ''
}, action) => {
	switch (action.type) {
		case 'REQUEST_LIBRARY':
			return Object.assign(
				{},
				state,
				{ isFetching: true }
			);
		case 'RECEIVE_LIBRARY':
			return Object.assign(
				{},
				state,
				{
					isFetching: false
				},
				action.json
			);
		default:
			return state;
	}
};

export default library;
