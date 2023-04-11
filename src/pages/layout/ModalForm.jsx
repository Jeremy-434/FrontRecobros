import { IconButton, Modal, Box, Button } from '@mui/material';
import { useState } from 'react';

const styleBoxForm = {
    borderRadius: '10px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
};


export const ModalForm = ({
    children,
    funtion,
    nameButton,
    styleButton,
    handleCloseModal,
    styleIconButton,
    hiddenStyle,
    title,
    hiddenStyleCancelar,
    colorStyleIconButton,
    buttonBorrar
}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        handleCloseModal ? handleCloseModal() : null;
    };

    const handleButton = (event) => {
        event.preventDefault();
        const call = funtion();
        call && handleClose();
    }
    const colorButtonStyle = colorStyleIconButton != undefined ? colorStyleIconButton : 'primary';

    return (
        <>
            <IconButton
                onClick={handleOpen}
                title={title}
                color={colorButtonStyle}
                sx={styleIconButton}
            >
                {styleButton}
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box
                    sx={{ ...styleBoxForm }}
                    component="form"
                    onSubmit={handleButton}
                >
                    {children}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClose}
                            sx={hiddenStyleCancelar}
                        >
                            Cancelar
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            sx={hiddenStyle}
                        >
                            {nameButton}
                        </Button>
                        {buttonBorrar}
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
