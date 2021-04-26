export type TStoreItem = {
	id: string;
	isInStore: boolean;
	imageUrl: string;
	brand: string;
	isFavorite: boolean;
};

export type TShopCategory = {
	category: string;
	storeList: TStoreItem[];
};

export type TShopList = {
	shopList: TShopCategory[];
};
