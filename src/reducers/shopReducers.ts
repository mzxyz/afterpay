import { TShopList } from '@types/shopTypes';
import actionTypes, { IAction } from '@src/actionTypes';

export type shopState = TShopList;

const defaultState = {
	shopList: [],
};

const shopReducer = (state = defaultState, action: IAction) => {
	switch (action.type) {
		case actionTypes.favorite.changed:
			return { ...state, ...action.payload };
		default:
			return state;
	}
};

export default shopReducer;
