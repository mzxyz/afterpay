import React from 'react';
import { ContentContainer, ItemContainer, Label } from './styles';
import Icon from '../icon-item';

type Props = {
	label: string;
	icon: string;
	isFocused: boolean;
};

const TabBarItem: React.FC<Props> = ({ label, icon, isFocused = false }) => {
	return (
		<ItemContainer>
			<Icon name={icon} color="black" size={26} />
			<ContentContainer isFocused={isFocused}>
				<Label isFocused={isFocused}>{label}</Label>
			</ContentContainer>
		</ItemContainer>
	);
};

export default TabBarItem;
