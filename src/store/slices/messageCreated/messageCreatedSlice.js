import { createSlice } from '@reduxjs/toolkit';

export const messageCreatedSlice = createSlice({
    name: 'messageCreated',
    initialState: {
        message: '',
        messageBool: false,
        severity: 'success',
        status: ''
    },
    reducers: {
        setMessage: (state, action ) => {
            state.message = `${action.payload.text}`;
            state.severity = `${action.payload.severity}`;
            state.status = 'completed';
        },
        handleMessageOpen: (state ) => {
            state.messageBool = true;
            state.status = 'completed';
        },
        handleMessageClose: (state ) => {
            state.messageBool = false;
        },
        checkingProgress: (state) => {
            state.status = 'inProgress';
        }
    }
});


// Action creators are generated for each case reducer function
export const { setMessage, handleMessageOpen, handleMessageClose, checkingProgress } = messageCreatedSlice.actions;