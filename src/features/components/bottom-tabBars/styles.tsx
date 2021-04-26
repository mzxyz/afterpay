import styled from 'styled-components/native';

export const Container = styled.View`
	flex: 1;
	height: 94px;
	background-color: white;
`;

export const ItemContainer = styled.View`
	flex: 1;
	align-items: center;
	padding-top: 15px;
`;

export const ContentContainer = styled.View<{
	isFocused: boolean;
}>`
	background-color: ${({ isFocused, theme }) =>
		isFocused ? theme.colors.accent : 'transparent'};
	border-radius: 5px;
	padding: 5px;
	align-items: center;
	justify-content: center;
	margin-top: 3px;
`;

export const Label = styled.Text<{
	isFocused: boolean;
}>`
	font-weight: ${({ isFocused }) => (isFocused ? 700 : 500)};
	color: black;
	font-size: 10px;
`;
