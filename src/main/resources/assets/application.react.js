import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './configureStore';
import LibrariesContainer from './Libraries/LibrariesContainer.react';
import LibraryContainer from './Library/LibraryContainer.react';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<div className='container'>
			<div className='col-xs-8 col-xs-offset-2'>
				<div className='page-header'>
					<h1>JavaScript Libraries <small>from cdnjs</small></h1>
				</div>
			</div>
			<div className='row'>
				<div className='col-xs-offset-2 col-xs-3'>
					<LibrariesContainer />
				</div>
				<div className='col-xs-offset-2 col-xs-3'>
					<LibraryContainer />
				</div>
			</div>
		</div>
	</Provider>, document.getElementById('root'));
