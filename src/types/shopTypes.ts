export type TStoreItem = {
	isInStore: boolean;
	imageUrl: string;
	brand: string;
	isFavorite: boolean;
	// brandIcon: string;
};

export type TShopCategory = {
	category: string;
	storeList: TStoreItem[];
};

export type TShopList = {
	shopList: TShopCategory[];
};
