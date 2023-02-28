import { createSlice } from '@reduxjs/toolkit';

export const messageCreatedSlice = createSlice({
    name: 'messageCreated',
    initialState: {
        message: '',
        messageBool: false
    },
    reducers: {
        setMessage: (state, action ) => {
            state.message = `${action.payload}`;
        },
        handleMessageOpen: (state ) => {
            state.messageBool = true;
        },
        handleMessageClose: (state ) => {
            state.messageBool = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { setMessage, handleMessageOpen, handleMessageClose } = messageCreatedSlice.actions;