import { ofType } from 'redux-observable';
import { switchMap, delay } from 'rxjs/operators';
import { of } from 'rxjs';

import { TActionsObservable, TStateObservable } from '../types';
import shopList from '../../mock/shopList';
import actionTypes from '../../actionTypes';

const requestShopListEpic = (action$: TActionsObservable, state$: TStateObservable) =>
	action$.pipe(
		ofType(actionTypes.shopList.requested),
		delay(2000),
		switchMap(() => {
			return of({
				type: actionTypes.shopList.completed,
				payload: { shopList },
			});
		}),
	);

export default requestShopListEpic;
