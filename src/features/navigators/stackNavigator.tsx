import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ShopPage from '../pages//shop';
import BackButton from '../components/back-button/index';

const Stack = createStackNavigator();

const customisedOptions = (title: string, iconName: string) => {
	return {
		title: '',
		headerStyle: { shadowColor: 'transparent' },
		headerLeft: () => <BackButton title={title} iconName={iconName} />,
	};
};

export const ShopNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Shop"
			component={ShopPage}
			options={{ header: () => null }}
		/>
	</Stack.Navigator>
);

export const OrdersNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Orders"
			component={ShopPage}
		/>
	</Stack.Navigator>
);

export const InStoreNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="InStore"
			component={ShopPage}
		/>
	</Stack.Navigator>
);

export const ProfileNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="Profile"
			component={ShopPage}
		/>
	</Stack.Navigator>
);
