import React from 'react';
import { Container, Title } from './styles';
import Icon from '../../../../components/icon-item';

type Props = {
	title: string;
	onPress: () => void;
	iconName?: string;
	iconColor?: string;
	titleColor?: string;
	color?: string;
};

const Button: React.FC<Props> = ({
	title,
	iconName,
	onPress,
	iconColor = 'black',
	titleColor = 'black',
	color,
}) => (
	<Container color={color} onPress={onPress}>
		<Title color={titleColor}>{title}</Title>
		{!!iconName && <Icon name={iconName} color={iconColor} size={25} />}
	</Container>
);

export default Button;
