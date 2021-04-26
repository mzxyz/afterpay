import { ofType } from 'redux-observable';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { get, isEmpty } from 'lodash';

import { TActionsObservable, TStateObservable } from '../types';
import actionTypes from '../../actionTypes';
import { TStoreItem, TShopCategory } from '../../types/shopTypes';
import { TShopState } from '../../reducers/shopReducers';

const updateFavoriteList = (storeItem: TStoreItem, favoriteList: TStoreItem[]) => {
	const {isFavorite, id} = storeItem;
	const storeList = isFavorite ? [...favoriteList, storeItem] : favoriteList.filter(item => item.id !== id);
	return storeList;
};

const updateItemFavoriteStatus = (storeItem: TStoreItem, storeList: TStoreItem[]) => {
	const {isFavorite, id} = storeItem;
	return storeList.map((item) => ({...item, isFavorite: (item.id === id ? isFavorite : item.isFavorite)}));
};

const getUpdatedStoreList = (category: string, storeItem: TStoreItem, storeList: TStoreItem[]): TStoreItem[] => (
	(category === 'Favorites') ? updateFavoriteList(storeItem, storeList) : updateItemFavoriteStatus(storeItem, storeList)
);

const updateFavoritesEpic = (action$: TActionsObservable, state$: TStateObservable) =>
	action$.pipe(
		ofType(actionTypes.changeFavorite.toggled),
		withLatestFrom(state$),
		switchMap(([action, state]) => {
			const {shopList} = get(state, 'shop') as TShopState;
			const storeItem = get(action, 'payload') as TStoreItem;

			const updatedShopList = shopList.map((item: TShopCategory) => {
				const {category, storeList} = item;
				const updatedStoreList = getUpdatedStoreList(category, storeItem, storeList);
				return {...item, storeList: updatedStoreList};
			})

			return of({
				type: actionTypes.favorite.changed,
				payload: { shopList: updatedShopList },
			});
		}),
	);

export default updateFavoritesEpic;
