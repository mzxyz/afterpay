import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';
import TabBarNavigator from './features/navigators/tabBarNavigators';
import theme from './theme/theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<TabBarNavigator />
			</Provider>
		</ThemeProvider>
	);
};

export default App;
