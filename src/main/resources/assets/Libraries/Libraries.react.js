import React, { Component } from 'react';
import List from 'terra-list';

class Libraries extends Component {
	
	componentDidMount() {
		this.props.fetch();
	}

	render() {
		if(!this.props.libraries || this.props.libraries.length === 0){
			return <div>Loading...</div>;
		}
		const libraries = this.props.libraries.map((l, index) => {
			return (
				<List.Item
					key={index}
					content={<span onClick={() => {this.props.fetchLibrary(l.name)}}>{l.name}</span>}
					isSelectable={true}
					hasChevron={false}
				/>
			);
		});
		return (
			<div>{libraries}</div>
		);
	}
}

export default Libraries;
