import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { ShopNavigator, OrdersNavigator, InStoreNavigator, ProfileNavigator } from './stackNavigator';
import BottomTabBar from '../components/bottom-tabBars';

const Tab = createBottomTabNavigator();

const tabBarItem = (name: string, component: () => JSX.Element, icon: string) => ({
	name,
	component,
	icon,
});

const tabBarSources = [
	tabBarItem('Shop', ShopNavigator, 'shopping-basket'),
	tabBarItem('Orders', OrdersNavigator, 'list-alt'),
	tabBarItem('In-Store', InStoreNavigator, 'qr-code'),
	tabBarItem('Profile', ProfileNavigator, 'account-circle'),
];

const tabScreens = () =>
	tabBarSources.map(({ name, component, icon }) => (
		<Tab.Screen key={name} name={name} component={component} options={{ tabBarLabel: icon }} />
	));

const TabBarNavigator = () => {
	// React.useEffect(() => {
	// 	isMountedRef.current = true;
	// 	return () => (isMountedRef.current = false);
	// }, []);

	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName="In-Store" tabBar={(props) => <BottomTabBar {...props} />}>
				{tabScreens()}
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default TabBarNavigator;
