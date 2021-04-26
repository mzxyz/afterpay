export type TShopItem = {
	isInStore: boolean;
	imageUrl: string;
	brand: string;
	brandIcon: string;
	isFavorite: boolean;
};

export type TShopCategory = {
	category: string;
	shopItems: TShopItem[];
};

export type TShopList = {
	shopList: TShopCategory[];
};
