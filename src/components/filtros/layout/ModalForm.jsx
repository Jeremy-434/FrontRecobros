import { Add } from '@mui/icons-material';
import { IconButton, Modal, Box } from '@mui/material';
import { useState } from 'react';

const styleBoxForm = {
    borderRadius: '10px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
};


export const ModalForm = ({children}) => {
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <IconButton onClick={handleOpen} title='Agregar' color='secondary'>
                <Add />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...styleBoxForm, width: 400 }}>
                    {children}
                </Box>
            </Modal>
        </>
    )
}
