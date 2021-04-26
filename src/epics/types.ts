import { ActionsObservable, StateObservable } from 'redux-observable';
import { IAction } from '../actionTypes';
import { TState } from '../reducers';

export type TActionsObservable = ActionsObservable<IAction>;

export type TStateObservable = StateObservable<TState>;
