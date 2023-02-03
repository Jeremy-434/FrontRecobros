import { configureStore } from '@reduxjs/toolkit';
import { aplicacionesApi } from './apis/aplicacionesApi';

export const store = configureStore({
    reducer: {
        [aplicacionesApi.reducerPath]: aplicacionesApi.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat( aplicacionesApi.middleware )
})