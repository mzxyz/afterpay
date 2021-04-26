import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Icon from '../icon-item';

type Props = {
	isFavorite: boolean;
	onPress: (isFavorite: boolean) => void;
};

const FavoriteIcon: React.FC<Props> = ({ isFavorite, onPress }) => {
	const primaryColor = 'gray';
	const primaryIcon = 'favorite-border';

	const hightlightColor = '#f88178';
	const hightlightIcon = 'favorite';

	const [selected, setStatus] = useState(isFavorite);
	const [name, setName] = useState(isFavorite ? hightlightIcon : primaryIcon);
	const [color, setColor] = useState(isFavorite ? hightlightColor : primaryColor);

	const onIconPress = () => {
		if (onPress) {
			onPress(!selected);
		}
		setName(selected ? hightlightIcon : primaryIcon);
		setColor(selected ? hightlightColor : primaryColor);
		setStatus(!selected);
	};

	return (
		<TouchableWithoutFeedback onPress={() => onIconPress()}>
			<Icon name={name} color={color} size={25} />
		</TouchableWithoutFeedback>
	);
};

export default FavoriteIcon;
