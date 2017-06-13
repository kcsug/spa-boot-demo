import { connect } from 'react-redux';
import Library from './Library.react';

const mapStateToProps = state => ({
	library: state.library
});

const LibraryContainer = connect(mapStateToProps, null)(Library);

export default LibraryContainer;
