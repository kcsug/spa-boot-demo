import React, { PropTypes } from 'react';

const Library = (props) => {
	if (!props.library || props.library.name === '') {
		return <div>Please Select a Library</div>;
	}
	const assets = props.library.assets.map((a, index) => {
		const files = a.files.map((f, i) => (
			<li key={i} className='list-group-item'>{f}</li>
		));
		return (
			<div key={index}>
				<span>{a.version}</span>
				<ul className='list-group'>
					{files}
				</ul>
			</div>
		);
	});
	return (
		<dl>
			<dt>Name:</dt>
			<dd>{props.library.name}</dd>
			<dt>Description:</dt>
			<dd>{props.library.description}</dd>
			<dt>Filename:</dt>
			<dd>{props.library.filename}</dd>
			<dt>Homepage:</dt>
			<dd>{props.library.homepage}</dd>
			<dt>License:</dt>
			<dd>{props.library.license}</dd>
			<dt>Version:</dt>
			<dd>{props.library.version}</dd>
			<dt>Repository:</dt>
			<dd>{props.library.repository && props.library.repository.url}</dd>
			<dt>Assets:</dt>
			<dd>{assets}</dd>
		</dl>
	);
};
Library.defaultProps = {
	library: null
};
Library.propTypes = {
	library: PropTypes.shape({
		name: PropTypes.string,
		description: PropTypes.string,
		filename: PropTypes.string,
		homepage: PropTypes.string,
		license: PropTypes.string,
		version: PropTypes.string,
		repository: PropTypes.object,
		assets: PropTypes.array
	})
};

export default Library;
