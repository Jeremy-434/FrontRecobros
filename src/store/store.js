import { configureStore } from '@reduxjs/toolkit';
import { aplicacionesApi, serviciosApi } from './apis';

export const store = configureStore({
    reducer: {
        [aplicacionesApi.reducerPath]: aplicacionesApi.reducer,
        [serviciosApi.reducerPath]: serviciosApi.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat( aplicacionesApi.middleware )
        .concat( serviciosApi.middleware )
})