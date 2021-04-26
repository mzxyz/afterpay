import React from 'react';
import {Container, HeaderContainer, MenuButton, Label, SearchContainer, StyledTextInput} from './styles';
import Icon from '../icon-item';

const SearchHeader = () => {
    return (
        <Container>
            <HeaderContainer>
                <Label>afterpay</Label>
                <MenuButton>
                    <Icon name={'menu'} size={25} color={'black'} />
                </MenuButton>
            </HeaderContainer>
            <SearchContainer>
                <Icon name={'search'} size={25} color={'black'} />
                <StyledTextInput
                    placeholder={'Search brands, products, stores...'}
                    returnKeyType="search"
                />
            </SearchContainer>
        </Container>
    );
};

export default SearchHeader;
