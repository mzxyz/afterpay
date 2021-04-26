import React from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import Icon from '../../components/icon-item';
import StoreCard from '../../components/store-card';
import {Container, HeaderContainer, Title, MoreButton, ListHeader, ListSeparator} from './styles';
import shopList from '../../../mock/shopList';
import { TShopCategory } from '../../../types/shopTypes';

const renderStoreItems = (shopCategpry: TShopCategory) => {
    const {category, storeList} = shopCategpry; 
    const renderItem = (data) => {
        const {item} = data;
        return <StoreCard {...item} />;
    }

    return (
        <Container key={category}>
            <HeaderContainer>
                <Title>{category}</Title>
                <MoreButton onPress={() => {}}>
                    <Icon name={'east'} color={'white'} size={25} />
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
                keyExtractor={(_, index) => `${category}${index}`}
            />
        </Container>
    );
}

const ShopPage = () => {
    return (
        <ScrollView style={{ marginTop: 50, backgroundColor: 'white'}}>
            {shopList.map((item) => renderStoreItems(item))}
        </ScrollView>
    );
}

export default ShopPage;
