import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{
	color: string;
}>`
	flex-direction: row;
	border-radius: 25px;
	align-items: center;
	justify-content: center;
	background-color: ${({ color }) => color || 'white'};
	border-width: ${({ color }) => (color ? 0 : StyleSheet.hairlineWidth)}px;
	border-color: lightgray;
	height: 50px;
	margin-top: 15px;
`;

export const Title = styled.Text<{
	color: string;
}>`
	font-size: 13px;
	font-weight: 600;
	margin-right: 10px;
	color: ${({ color }) => color || 'black'};
`;
