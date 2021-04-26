import { Action } from 'redux';

import { changedActionTypes, toggledActionTypes, apiActionTypes } from './utils/typeConfig';

export interface IAction extends Action {
	type: string;
	payload?: object;
}

// export type Dispatch = Dispatch<IAction>;

const actionTypes = {
	// shop
	shopList: apiActionTypes('shop list'),

	// favorite
	changeFavorite: toggledActionTypes('change favorite'),
	favorite: changedActionTypes('favorite'),
};

export default actionTypes;
