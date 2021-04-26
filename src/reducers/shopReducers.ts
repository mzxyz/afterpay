import { TShopList } from '../types/shopTypes';
import actionTypes, { IAction } from '../actionTypes';

export type TShopState = {
	isLoading: boolean;
} & TShopList;

const defaultState = {
	isLoading: false,
	shopList: [],
};

const shopReducer = (state = defaultState, action: IAction) => {
	switch (action.type) {
		case actionTypes.shopList.requested:
			return { ...state, isLoading: true };
		case actionTypes.shopList.completed:
		case actionTypes.shopList.failed:
			return {
				...state,
				...action.payload,
				isLoading: false,
			};
		case actionTypes.favorite.changed:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
