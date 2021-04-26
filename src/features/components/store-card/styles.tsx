import styled from 'styled-components/native';

// TODO: should calculate by the screen width
export const Container = styled.ImageBackground`
	overflow: hidden;
	justify-content: space-between;
	width: 150px;
	height: 200px;
	border-radius: 10px;
	padding: 5px;
`;

export const BrandContainer = styled.View`
	flex-direction: row;
	background-color: white;
	justify-content: space-between;
	border-radius: 5px;
	padding: 15px 5px;
`;

export const Title = styled.Text`
	font-size: 12px;
	font-weight: 600;
`;

export const Icon = styled.Image`
	width: 15px;
	height: 15px;
`;

export const HeaderContainer = styled.View`
	flex-direction: row;
	background-color: transparent;
	justify-content: space-between;
	padding: 3px;
`;

export const TagContainer = styled.View<{
	visibility: boolean;
}>`
	align-items: center;
	justify-content: center;
	background-color: black;
	border-radius: 5px;
	padding: 3px 5px;
	opacity: ${({ visibility }) => (visibility ? 1 : 0)};
`;

export const TagText = styled.Text`
	color: white;
	font-size: 10px;
	font-weight: bold;
`;
