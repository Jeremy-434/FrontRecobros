import { configureStore } from '@reduxjs/toolkit';
import {
    CECOApi,
    CECOFileApi,
    aliadosApi,
    aplicacionesApi,
    archivoApi,
    cierreMesApi,
    consolidadosApi,
    controlArchivosApi,
    logErroresJoinConsolidadosApi,
    optionsApi,
    parametrosApi,
    permissionsApi,
    rolesApi,
    rolesUsersApi,
    serviciosApi
} from './apis';
import { dataFileSlice } from './slices/dataFile.js/index.js';
import { filteredDataSlice } from './slices/filteredData';
import { messageCreatedSlice } from './slices/messageCreated';
import { logErroresApi } from './apis/logErrores/logErroresApi';
import { accountApi, authSlice } from './auth';

export const store = configureStore({
    reducer: {
        // * APIS
        [aplicacionesApi.reducerPath]: aplicacionesApi.reducer,
        [serviciosApi.reducerPath]: serviciosApi.reducer,
        [aliadosApi.reducerPath]: aliadosApi.reducer,
        [controlArchivosApi.reducerPath]: controlArchivosApi.reducer,
        [archivoApi.reducerPath]: archivoApi.reducer,
        [parametrosApi.reducerPath]: parametrosApi.reducer,
        [cierreMesApi.reducerPath]: cierreMesApi.reducer,
        [consolidadosApi.reducerPath]: consolidadosApi.reducer,
        [logErroresApi.reducerPath]: logErroresApi.reducer,
        [logErroresJoinConsolidadosApi.reducerPath]: logErroresJoinConsolidadosApi.reducer,
        [CECOFileApi.reducerPath]: CECOFileApi.reducer,
        [CECOApi.reducerPath]: CECOApi.reducer,
        [accountApi.reducerPath]: accountApi.reducer,
        [rolesApi.reducerPath]: rolesApi.reducer,
        [optionsApi.reducerPath]: optionsApi.reducer,
        [permissionsApi.reducerPath]: permissionsApi.reducer,
        [rolesUsersApi.reducerPath]: rolesUsersApi.reducer,

        // * other states
        messageCreated: messageCreatedSlice.reducer,
        filteredData: filteredDataSlice.reducer,
        dataFile: dataFileSlice.reducer,
        // * Authentication
        auth: authSlice.reducer,
    },

    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(aplicacionesApi.middleware)
        .concat(serviciosApi.middleware)
        .concat(aliadosApi.middleware)
        .concat(controlArchivosApi.middleware)
        .concat(archivoApi.middleware)
        .concat(parametrosApi.middleware)
        .concat(cierreMesApi.middleware)
        .concat(consolidadosApi.middleware)
        .concat(logErroresApi.middleware)
        .concat(logErroresJoinConsolidadosApi.middleware)
        .concat(CECOFileApi.middleware)
        .concat(CECOApi.middleware)
        .concat(accountApi.middleware)
        .concat(rolesApi.middleware)
        .concat(optionsApi.middleware)
        .concat(permissionsApi.middleware)
        .concat(rolesUsersApi.middleware)
})