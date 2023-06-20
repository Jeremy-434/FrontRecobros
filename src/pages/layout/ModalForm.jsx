import { IconButton, Modal, Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';

const styleBoxForm = {
    borderRadius: '10px',
    position: 'absolute',
    zIndex: 500,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 24,
    p: 4,
};


export const ModalForm = ({
    children,
    function: functionProp = () => {},
    nameButton,
    styleButton,
    styleIconButton,
    hiddenStyle,
    title,
    customButton,
    forCloseModal,
    setForCloseModal = () => { },
    styleBoxButtons
}) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleButton = (event) => {
        event.preventDefault();
        const call = functionProp();
        // if (typeof call === 'object') return;
        // call && handleClose();
        if (call) handleClose();
    }

    useEffect(() => {
        if (forCloseModal == true) {
            handleClose();
        }
        setForCloseModal(false);
    }, [forCloseModal])


    return (
        <>
            <IconButton
                onClick={handleOpen}
                title={title}
                sx={styleIconButton}
                color='primary'
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
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3, ...styleBoxButtons }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleClose}
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
                        {customButton}
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
