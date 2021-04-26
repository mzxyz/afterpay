import styled from 'styled-components/native';
import Colors from '../../../theme/colors';

export const Container = styled.View`
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.accent};
	margin: 15px;
	margin-top: 0px;
	border-radius: 15px;
	padding: 20px;
`;

export const HeaderContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
`;

export const MenuButton = styled.TouchableOpacity``;

export const Label = styled.Text`
	font-size: 25px;
	font-weight: bold;
`;

export const SearchContainer = styled.View`
	flex-direction: row;
	background-color: white;
	align-items: center;
	border-radius: 10px;
	padding: 15px;
`;

export const StyledTextInput = styled.TextInput`
	font-size: 15px;
	margin-left: 10px;
`;
