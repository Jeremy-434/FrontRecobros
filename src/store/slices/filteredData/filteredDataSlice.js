import { createSlice } from '@reduxjs/toolkit';

export const filteredDataSlice = createSlice({
    name: 'filteredData',
    initialState: {
        filters: []
    },
    reducers: {
        setFilters: (state, action  ) => {
            state.filters = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setFilters } = filteredDataSlice.actions;