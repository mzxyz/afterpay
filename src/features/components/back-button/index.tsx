import React from 'react';
import Icon from '../icon-item';
import { Container, Title } from './styles';

type Props = {
	title: string;
	iconName: string;
};

const BackButton: React.FC<Props> = ({ title, iconName }) => (
	<Container>
		{!!iconName && <Icon name={iconName} color={'black'} size={35} />}
		{!!title && <Title>{title}</Title>}
	</Container>
);

export default BackButton;
