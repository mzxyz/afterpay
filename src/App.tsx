import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

const App = () => {
	return (
		<Provider store={store}>
			<View style={{ flex: 1, backgroundColor: 'blue'}} />
		</Provider>
	);
};

export default App;
