import { ActionsObservable, StateObservable } from 'redux-observable';
import { IAction } from '@src/actionTypes';
import { State } from '../reducers';

export type TActionsObservable = ActionsObservable<IAction>;

export type TStateObservable = StateObservable<State>;
