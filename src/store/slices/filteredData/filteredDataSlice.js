import { createSlice } from '@reduxjs/toolkit';

export const filteredDataSlice = createSlice({
    name: 'filteredData',
    initialState: {
        filterServicios: [],
        filterAplicaciones: []
    },
    reducers: {
        setFilters: (state, action  ) => {
            switch (action.type) {
                case 'Aplicacion':
                    state.filterAplicaciones = action.payload;
                case 'Servicio':
                    state.filterServicios = action.payload;
                default:
                    break;
            }
        },
    }
});


// Action creators are generated for each case reducer function
export const { setFilters } = filteredDataSlice.actions;