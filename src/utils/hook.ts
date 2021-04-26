import { useRef, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const usePrevious = (value: any) => {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};

export const useCompare = (value: any) => {
	const prevVal = usePrevious(value);
	return prevVal !== value;
};

export const useTheme = () => {
	return useContext(ThemeContext);
};
