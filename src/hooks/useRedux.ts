import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../app/store';

// Crea y exporta versiones tipadas de los hooks.
// Úsalos en toda tu aplicación en lugar de los `useDispatch` y `useSelector` simples.
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
