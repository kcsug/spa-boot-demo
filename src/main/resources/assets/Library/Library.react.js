import React, { Component } from 'react';
import List from 'terra-list';

class Library extends Component {
	render() {
		if(!this.props.library || this.props.library.name === ''){
			return <div>Please Select a Library</div>;
		}
		const assets = this.props.library.assets.map((a, index) => {
			const files = a.files.map((f, index) => {
				return <List.Item
					key={index}
					content={<span>{f}</span>}
					isSelectable={false}
				/>
			});
			return (
				<div key={index}>
					<span>{a.version}</span>
					{files}
				</div>
			);
		})
		return (
			<dl>
				<dt>Name:</dt>
				<dd>{this.props.library.name}</dd>
				<dt>Description:</dt>
				<dd>{this.props.library.description}</dd>
				<dt>Filename:</dt>
				<dd>{this.props.library.filename}</dd>
				<dt>Homepage:</dt>
				<dd>{this.props.library.homepage}</dd>
				<dt>License:</dt>
				<dd>{this.props.library.license}</dd>
				<dt>Version:</dt>
				<dd>{this.props.library.version}</dd>
				<dt>Repository:</dt>
				<dd>{this.props.library.repository && this.props.library.repository.url}</dd>
				<dt>Assets:</dt>
				<dd>{assets}</dd>
			</dl>
		);
	}
}

export default Library;
