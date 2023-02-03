import { Add } from '@mui/icons-material';
import { Box, Button, IconButton, MenuItem, Modal, TextField, Typography, Link } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { useCreateAplicacionMutation, useGetAplicacionesQuery } from '../../store/apis/aplicacionesApi';

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

export const ModalAplicaciones = () => {

    const {
        nombreDeAplicación,
        estadoDeAplicacion,
        nombreDeSegmento,
        aliadoResponsable,
        servicio,
        onInputChange,
        onResetForm
    } = useForm({
        'nombreDeAplicación': '',
        'estadoDeAplicación': '',
        'nombreDeSegmento': '',
        'aliadoResponsable': '',
        'servicio': '',
    });
    
    const [createAplicacion] = useCreateAplicacionMutation();
    const agregarAplicacion = () => {
        createAplicacion({
            "nombreDeAplicación": nombreDeAplicación,
            "estadoDeAplicación": estadoDeAplicacion,
            "nombreDeSegmento": nombreDeSegmento,
            "aliadoResponsable": aliadoResponsable,
            "idServicio": servicio,
        });
        onResetForm();
    }
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { data } = useGetAplicacionesQuery();
    const aplicaciones = data ? data.response : [];

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
                    <Typography variant="h4" color="inherit" mb={2}>
                        Agregar aplicacion
                    </Typography>
                    <TextField
                        label="Nombre de aplicación"
                        name='nombreDeAplicación'
                        value={nombreDeAplicación}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Estado de aplicacion"
                        name='estadoDeAplicacion'
                        value={estadoDeAplicacion}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}

                    />
                    <TextField
                        label="Nombre de segmento"
                        name='nombreDeSegmento'
                        value={nombreDeSegmento}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}

                    />
                    <TextField
                        label="Aliado responsable"
                        name='aliadoResponsable'
                        value={aliadoResponsable}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}

                    />
                    <TextField
                        name="servicio"
                        value={servicio}
                        onChange={onInputChange}
                        label="Servicio"
                        size="small"
                        fullWidth
                        select
                    >
                        {
                            aplicaciones.map(({ oServicio }) => (
                                <MenuItem key={oServicio.idServicio} value={oServicio.idServicio}>{oServicio.servicio1}</MenuItem>
                            ))
                        }
                    </TextField>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button variant="contained" color="primary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => { agregarAplicacion(), handleClose() }}>
                            Agregar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
