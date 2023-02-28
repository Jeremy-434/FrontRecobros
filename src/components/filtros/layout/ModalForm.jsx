import { IconButton, Modal, Box, Button } from '@mui/material';
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


export const ModalForm = ({ children, funtion, nameButton, styleButton, handleCloseModal, styleIconButton }) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        handleCloseModal ? handleCloseModal() : null;
    };

    const handleButton = () => {
        const call = funtion();
        call && handleClose();
    }

    return (
        <>
            <IconButton onClick={handleOpen} title='Agregar' color='primary' sx={styleIconButton}>
                {styleButton}
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...styleBoxForm, width: 400 }}>
                    {children}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button variant="contained" color="primary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => { handleButton() }}>
                            {nameButton}
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
