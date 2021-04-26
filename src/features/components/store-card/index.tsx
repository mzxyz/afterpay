import React from 'react';
import { TStoreItem } from '../../../types/shopTypes';
import FavoriteIcon from '../favorite-button';
import {Container, BrandContainer, Title, Icon, HeaderContainer, TagContainer, TagText} from './styles';

const StoreCard: React.FC<TStoreItem> = (props) => {
    const { isInStore, isFavorite, imageUrl, brand } = props;
    return (
        <Container source={{uri: imageUrl}}>
            <HeaderContainer>
                <TagContainer visibility={isInStore}>  
                    <TagText>In-Store</TagText>
                </TagContainer>
                <FavoriteIcon isFavorite={isFavorite} onPress={() => {}} />
            </HeaderContainer>
            <BrandContainer>
                <Title>{brand}</Title>
            </BrandContainer>
        </Container>
    )
};

export default StoreCard;
