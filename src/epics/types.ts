import { ActionsObservable, StateObservable } from 'redux-observable';
import { IAction } from '../actionTypes';
import { State } from '../reducers';

export type TActionsObservable = ActionsObservable<IAction>;

export type TStateObservable = StateObservable<State>;
