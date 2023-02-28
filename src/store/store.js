import { configureStore } from '@reduxjs/toolkit';
import { aplicacionesApi, serviciosApi } from './apis';
import { messageCreatedSlice } from './slices/messageCreated';

export const store = configureStore({
    reducer: {
        // * APIS
        [aplicacionesApi.reducerPath]: aplicacionesApi.reducer,
        [serviciosApi.reducerPath]: serviciosApi.reducer,

        // * other states
        messageCreated: messageCreatedSlice.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(aplicacionesApi.middleware)
        .concat(serviciosApi.middleware)
})