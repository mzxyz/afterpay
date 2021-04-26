import { combineEpics } from 'redux-observable';

import updateFavoritesEpic from './favorite/updateFavoritesEpic';
import requestShopListEpic from './shop/requestShopListEpic';

const epics = [requestShopListEpic, updateFavoritesEpic];

export default combineEpics(...epics);
