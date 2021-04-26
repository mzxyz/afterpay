import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 15px 0px;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 0px 15px;
`;

export const Title = styled.Text`
    font-size: 25px;
    font-weight: bold;
`;

export const MoreButton = styled.TouchableOpacity`
    border-radius: 10px;
    background-color: black;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

export const ListSeparator = styled.View`
    flex: 1;
    width: 5px;
`;

export const ListHeader = styled.View`
    flex: 1;
    width: 15px;
`;