import { Action } from 'redux';

import { changedActionTypes, toggledActionTypes } from '@utils/typeConfig';

export interface IAction extends Action {
	type: string;
	payload?: object;
}

// export type Dispatch = Dispatch<IAction>;

const actionTypes = {
	// favorite
	changeFavorite: toggledActionTypes('change favorite'),
	favorite: changedActionTypes('favorite'),
};

export default actionTypes;
