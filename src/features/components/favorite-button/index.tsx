import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

	const color = isFavorite ? hightlightColor : primaryColor;
	const iconName = isFavorite ? hightlightIcon : primaryIcon;

	return (
		<TouchableOpacity onPress={() => onPress(!isFavorite)}>
			<Icon name={iconName} color={color} size={25} />
		</TouchableOpacity>
	);
};

export default FavoriteIcon;
