import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { playerApi } from '../api/playerApi'
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import appReducer from '../slice/appSlice';

export const store = configureStore({
    reducer: {
        [playerApi.reducerPath]: playerApi.reducer,
        app: appReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(playerApi.middleware)
});

setupListeners(store.dispatch);


export type RootState = ReturnType<typeof store.getState>
export const UseAppSelector : TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;