import { createSlice } from '@reduxjs/toolkit';

export const dataFileSlice = createSlice({
    name: 'dataFile',
    initialState: {
        dataFile: [],
        dataFinalFile: null, 
    },
    reducers: {
        setDataFileLines: (state, action ) => {
            state.dataFinalFile = state.dataFile;
            state.dataFile.push(action.payload);
        },
        deleteDataFileLines: (state) => {
            state.dataFile = [];
        }
    }
});


// Action creators are generated for each case reducer function
export const { setDataFileLines, deleteDataFileLines } = dataFileSlice.actions;