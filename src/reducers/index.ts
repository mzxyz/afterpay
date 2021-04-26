import { combineReducers } from 'redux';
import shop from './shopReducers';

const rootReducer = combineReducers({
	shop,
});

export type TState = ReturnType<typeof rootReducer>;

export default rootReducer;
