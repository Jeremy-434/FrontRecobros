import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { handleMessageClose } from '../../store/slices/messageCreated';

export const MessagesComponent = () => {

    const { message, messageBool, severity } = useSelector(state => state.messageCreated);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(handleMessageClose())
    }

    return (
        <>
            {
                (message != "") ?
                    <Snackbar open={messageBool} autoHideDuration={6000} onClose={handleClose}>
                        <Alert
                            onClose={handleClose}
                            severity={severity}
                            // severity={severity != undefined ? severity : 'success'}
                            sx={{ width: '100%' }}
                        >
                            {message}
                        </Alert>
                    </Snackbar> : null
            }
        </>
    )
}
