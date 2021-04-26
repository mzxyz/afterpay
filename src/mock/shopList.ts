import uuid from 'react-native-uuid';
import { TStoreItem } from '@src/types/shopTypes';

const createStoreItem = (isInStore: boolean, brand: string, imageUrl: string): TStoreItem => {
	return {
		id: '',
		isInStore,
		imageUrl,
		brand,
		isFavorite: false,
	};
};

const imageUrls = [
	'https://themarket.azureedge.net/resizer/view?key=7ae53decc5683e72900453d001726477&b=productimages&w=418&h=632',
	'https://themarket.azureedge.net/resizer/view?key=30fdd6209a4bcdbd7bf02a7d8f5b8829&b=productimages&w=418&h=632',
	'https://themarket.azureedge.net/resizer/view?key=65eba0461cfd74d6946714089da22725&b=productimages&w=418&h=632',
	'https://themarket.azureedge.net/resizer/view?key=65eba0461cfd74d6946714089da22725&b=productimages&w=418&h=632',
	'https://themarket.azureedge.net/resizer/view?key=75c6c104cafdd4138cbae172c7919aec&b=productimages&w=418&h=632',
	'https://themarket.azureedge.net/resizer/view?key=f9c271cc337a88eed6dc39c82f9fd7fd&b=productimages&w=418&h=632',
	'https://themarket.azureedge.net/resizer/view?key=234d4a329dc395a8904224cec21424b4&b=productimages&w=418&h=632',
	'https://themarket.azureedge.net/resizer/view?key=cb8fb7bb39b57557c5c45345d10fc3f4&b=productimages&w=418&h=632',
	'https://themarket.azureedge.net/resizer/view?key=8ed0a6a3e6dcac32e13b616eb4a8492b&b=productimages&w=418&h=632',
	'https://themarket.azureedge.net/resizer/view?key=4bc3d010b87d29998cb33fd43f51fe41&b=productimages&w=418&h=632',
];

const brands = [
	'Nood',
	'Dyson',
	'LG',
	'CITTA',
	'KitchenAid',
	'Liberty',
	'Freedom',
	'The Design Store',
	'Bestway',
	'Wharehouse',
];

const stores = imageUrls.map((url, index) => createStoreItem(index % 2 === 0, brands[index], url));

// randomly get 5 store items
const getRandomStores = (): TStoreItem[] => {
	return stores
		.map((_, index) => index)
		.sort(() => Math.random() - 0.5)
		.slice(0, 5)
		.map((index) => ({
			...stores[index],
			id: uuid.v4().toString(),
		}));
};

const createShopItem = (category: string, isEmpty = false) => {
	return {
		category,
		storeList: isEmpty ? [] : getRandomStores(),
	};
};

const shopList = [
	createShopItem('Favorites', true),
	createShopItem('Recommended For You'),
	createShopItem('Women'),
	createShopItem('Men'),
	createShopItem('Home & Entertainment'),
	createShopItem('Discover'),
];

export default shopList;
