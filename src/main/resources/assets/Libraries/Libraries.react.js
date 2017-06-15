import React, { PropTypes, Component } from 'react';

class Libraries extends Component {

	componentDidMount() {
		this.props.fetch();
	}

	render() {
		if (!this.props.libraries || this.props.libraries.length === 0) {
			return <div>Loading...</div>;
		}
		const libraries = this.props.libraries.map((l, i) => (
			<button
				key={i}
				type='button'
				className='list-group-item'
				onClick={() => { this.props.fetchLibrary(l.name); }}
			>
				{l.name}
			</button>
		));
		return (
			<div className='list-group'>{libraries}</div>
		);
	}
}
Libraries.propTypes = {
	fetch: PropTypes.func.isRequired,
	fetchLibrary: PropTypes.func.isRequired,
	libraries: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Libraries;
