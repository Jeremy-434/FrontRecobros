import { configureStore } from '@reduxjs/toolkit';
import { aliadosApi, aplicacionesApi, archivoApi, controlArchivosApi, serviciosApi } from './apis';
import { dataFileSlice } from './slices/dataFile.js/index.js';
import { filteredDataSlice } from './slices/filteredData';
import { messageCreatedSlice } from './slices/messageCreated';

export const store = configureStore({
    reducer: {
        // * APIS
        [aplicacionesApi.reducerPath]: aplicacionesApi.reducer,
        [serviciosApi.reducerPath]: serviciosApi.reducer,
        [aliadosApi.reducerPath]: aliadosApi.reducer,
        [controlArchivosApi.reducerPath]: controlArchivosApi.reducer,
        [archivoApi.reducerPath]: archivoApi.reducer,

        // * other states
        messageCreated: messageCreatedSlice.reducer,
        filteredData: filteredDataSlice.reducer,
        dataFile: dataFileSlice.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(aplicacionesApi.middleware)
        .concat(serviciosApi.middleware)
        .concat(aliadosApi.middleware)
        .concat(controlArchivosApi.middleware)
        .concat(archivoApi.middleware)
})