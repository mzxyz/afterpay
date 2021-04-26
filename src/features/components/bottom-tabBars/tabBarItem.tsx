import React, { useState, useEffect } from 'react';
import { ContentContainer, ItemContainer, Label } from './styles';
import { useCompare } from '../../../utils/hook';
import Icon from '../icon-item';

type Props = {
	label: string;
	icon: string;
	isFocused: boolean;
};

const TabBarItem: React.FC<Props> = ({ label, icon, isFocused = false }) => {
	const isFocusChanged = useCompare(isFocused);

	useEffect(() => {
		if (isFocusChanged) {
		}
	});

	return (
		<ItemContainer>
			<Icon name={icon} color={'black'} size={26} />
			<ContentContainer isFocused={isFocused}>
				<Label isFocused={isFocused}>
					{label}
				</Label>
			</ContentContainer>
		</ItemContainer>
	);
};

export default TabBarItem;
