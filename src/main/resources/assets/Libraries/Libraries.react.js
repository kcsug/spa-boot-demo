import React, { PropTypes, Component } from 'react';
import List from 'terra-list';

class Libraries extends Component {

	componentDidMount() {
		this.props.fetch();
	}

	render() {
		if (!this.props.libraries || this.props.libraries.length === 0) {
			return <div>Loading...</div>;
		}
		const libraries = this.props.libraries.map((l, index) => (
			<List.Item
				key={`key_${index}`}
				content={<span onClick={() => { this.props.fetchLibrary(l.name); }}>{l.name}</span>}
				isSelectable
				hasChevron={false}
			/>)
		);
		return (
			<div>{libraries}</div>
		);
	}
}
Libraries.propTypes = {
	fetch: PropTypes.func.isRequired,
	fetchLibrary: PropTypes.func.isRequired,
	libraries: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Libraries;
