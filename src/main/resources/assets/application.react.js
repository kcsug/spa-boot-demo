import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Base from 'terra-base';
import Grid from 'terra-grid';
import configureStore from './configureStore';
import LibrariesContainer from './Libraries/LibrariesContainer.react';
import LibraryContainer from './Library/LibraryContainer.react';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Base>
			<h1>JavaScript Libraries <small>from cdnjs</small></h1>
			<Grid>
				<Grid.Row>
					<Grid.Column col={3} />
					<Grid.Column col={3}>
						<LibrariesContainer />
					</Grid.Column>
					<Grid.Column col={6}>
						<LibraryContainer />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Base>
	</Provider>, document.getElementById('root'));
