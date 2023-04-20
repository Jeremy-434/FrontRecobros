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
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        open={messageBool}
                        autoHideDuration={6000}
                        onClose={handleClose}
                    >
                        <Alert
                            onClose={handleClose}
                            severity={severity}
                            variant="filled"
                            sx={{
                                width: '100%'
                            }}
                        >
                            {
                                (message.split(",") != null)
                                    ? message.split(",").map(me => (
                                        <div key={me}>
                                            {me}
                                            <br />
                                        </div>
                                    ))
                                    : message
                            }
                        </Alert>
                    </Snackbar> : null
            }
        </>
    )
}
