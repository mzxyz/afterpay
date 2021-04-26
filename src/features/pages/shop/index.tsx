import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { isEmpty } from 'lodash';

import Icon from '../../components/icon-item';
import SearchHeader from '../../components/search-header';
import StoreCard from '../../components/store-card';
import { TShopCategory, TStoreItem } from '../../../types/shopTypes';
import actionTypes from '../../../actionTypes';
import { useShopState } from '../../../reducers/selectors';

import {
	Container,
	StoreListContainer,
	IndicatorContainer,
	HeaderContainer,
	Title,
	MoreButton,
	ListHeader,
	ListSeparator,
} from './styles';

const renderStoreItems = (shopCategpry: TShopCategory) => {
	const { category, storeList } = shopCategpry;
	if (isEmpty(storeList)) return null;

	const renderItem = (data: { item: TStoreItem }) => {
		return <StoreCard {...data.item} />;
	};

	return (
		<StoreListContainer key={category}>
			<HeaderContainer>
				<Title>{category}</Title>
				<MoreButton onPress={() => {}}>
					<Icon name="east" color="white" size={25} />
				</MoreButton>
			</HeaderContainer>
			<FlatList
				horizontal
				directionalLockEnabled
				showsHorizontalScrollIndicator={false}
				initialNumToRender={5}
				data={storeList}
				renderItem={renderItem}
				ItemSeparatorComponent={() => <ListSeparator />}
				ListHeaderComponent={() => <ListHeader />}
				ListFooterComponent={() => <ListSeparator />}
				keyExtractor={({ id }) => id}
			/>
		</StoreListContainer>
	);
};

const ShopPage = () => {
	const dispatch = useDispatch();
	const { isLoading, shopList } = useShopState();

	useEffect(() => {
		dispatch({
			type: actionTypes.shopList.requested,
		});
	}, []);

	const renderLoadingView = () => (
		<IndicatorContainer>
			<ActivityIndicator />
		</IndicatorContainer>
	);

	const renderShopList = () => (
		<ScrollView>{!!shopList && shopList.map((item) => renderStoreItems(item))}</ScrollView>
	);

	return (
		<Container>
			<SearchHeader />
			{isLoading ? renderLoadingView() : renderShopList()}
		</Container>
	);
};

export default ShopPage;
