import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const StyledScrollView = styled.ScrollView`
	flex: 1;
	padding: 20px;
`;

export const Container = styled.View`
	background-color: white;
	border-radius: 10px;
	overflow: hidden;
`;

export const TopContainer = styled.View`
	flex-direction: row;
	background-color: ${({ theme }) => theme.colors.accent};
	justify-content: center;
	padding: 15px;
`;

export const AmountContainer = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;
	padding: 10px;
	margin-top: 10px;
`;

export const SeparatorLine = styled.View`
	height: ${StyleSheet.hairlineWidth}px;
	background-color: lightgray;
	margin-horizontal: 40px;
`;

type TextProps = {
	fontSize: number;
	fontWeight: string;
	letterSpacing: number;
	marginBottom: number;
	marginTop: number;
	color: string;
};

export const StyledText = styled.Text<TextProps>`
	font-size: ${({ fontSize }) => fontSize || '15'}px;
	font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
	color: ${({ color }) => color || 'black'};
	letter-spacing: ${({ letterSpacing }) => letterSpacing || 0}px;
	margin-bottom: ${({ marginBottom }) => marginBottom || 0}px;
	margin-top: ${({ marginTop }) => marginTop || 0}px;
`;

export const ButtonContainer = styled.View`
	margin: 10px 15px 25px 15px;
`;

export const BarCodeInfoContainer = styled.View`
	margin: 20px;
	margin-top: 0px;
	align-items: center;
`;
