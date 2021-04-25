import { ofType } from 'redux-observable';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { get } from 'lodash';

import { TActionsObservable, TStateObservable } from '../types';
import actionTypes from '@src/actionTypes';

const updateFavoritesEpic = (action$: TActionsObservable, state$: TStateObservable) =>
	action$.pipe(
		ofType(actionTypes.changeFavorite.toggled),
		withLatestFrom(state$),
		switchMap(([action, state]) => {
			const isFavorite = get(action, 'payload.isFavorite');

			return of({
				type: actionTypes.favorite.changed,
				payload: { favoriteList: [] },
			});
		}),
	);

export default updateFavoritesEpic;
