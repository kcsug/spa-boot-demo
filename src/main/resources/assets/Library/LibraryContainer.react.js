import React from 'react';
import { connect } from 'react-redux';
import Library from './Library.react';

const mapStateToProps = (state, props) => ({
	library: state.library
});

const LibraryContainer = connect(mapStateToProps, null)(Library);

export default LibraryContainer;
