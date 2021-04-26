import { combineReducers } from 'redux';
import shop from './shopReducers';

const rootReducer = combineReducers({
	shop,
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
