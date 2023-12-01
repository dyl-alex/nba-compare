import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { playerApi } from '../api/playerApi'
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        [playerApi.reducerPath]: playerApi.reducer, 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(playerApi.middleware)
});

setupListeners(store.dispatch);

export default store;