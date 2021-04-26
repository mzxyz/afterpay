import React from 'react';
import {useDispatch} from 'react-redux';

import { TStoreItem } from '../../../types/shopTypes';
import FavoriteIcon from '../favorite-button';
import {Container, BrandContainer, Title, Icon, HeaderContainer, TagContainer, TagText} from './styles';
import actionTypes from '../../../actionTypes';

const StoreCard: React.FC<TStoreItem> = (props) => {
    const { isInStore, isFavorite, imageUrl, brand } = props;
    const dispatch = useDispatch();

    const updateFavorite = (isSelected: boolean) => {
        dispatch({
            type: actionTypes.changeFavorite.toggled,
            payload: {...props, isFavorite: isSelected}
        });
    }

    return (
        <Container source={{uri: imageUrl}}>
            <HeaderContainer>
                <TagContainer visibility={isInStore}>  
                    <TagText>In-Store</TagText>
                </TagContainer>
                <FavoriteIcon isFavorite={isFavorite} onPress={updateFavorite} />
            </HeaderContainer>
            <BrandContainer>
                <Title>{brand}</Title>
            </BrandContainer>
        </Container>
    )
};

export default StoreCard;
