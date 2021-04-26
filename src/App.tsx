import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import TabBarNavigator from './features/navigators/tabBarNavigators';

const App = () => {
	return (
		<Provider store={store}>
			<TabBarNavigator />
		</Provider>
	);
};

export default App;
