import { connect } from 'react-redux';
import Libraries from './Libraries.react';

const mapStateToProps = state => ({
	libraries: state.libraries.libraries
});

const mapDispatchToProps = dispatch => ({
	fetch: () => {
		dispatch({
			type: 'REQUEST_LIBRARIES'
		});
		return fetch('/api/libraries', {
			credentials: 'same-origin'
		})
			.then(response => response.json())
			.then(json => dispatch({
				type: 'RECEIVE_LIBRARIES',
				json
			}));
	},

	fetchLibrary: (name) => {
		dispatch({
			type: 'REQUEST_LIBRARY'
		});
		return fetch(`/api/libraries/${name}`)
			.then(response => response.json())
			.then(json => dispatch({
				type: 'RECEIVE_LIBRARY',
				json
			}));
	}
});

const LibrariesContainer = connect(mapStateToProps, mapDispatchToProps)(Libraries);

export default LibrariesContainer;
