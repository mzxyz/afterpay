import { useSelector } from 'react-redux';
import { TState } from './index';
import { TShopState } from './shopReducers';

export function useState<TSelected>(selector: (state: TState) => TSelected) {
	return useSelector((state: TState) => selector(state));
}

export const useShopState = (): TShopState => useState((state) => state.shop);
