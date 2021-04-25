import { combineEpics } from 'redux-observable';

import updateFavorites from './favorite/updateFavorites';

const epics = [updateFavorites];

export default combineEpics(...epics);
