import { Add } from '@mui/icons-material';
import { Box, Button, IconButton, MenuItem, Modal, TextField, Typography, Link } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { useCrudAplicaciones } from '../../hooks/useCrudAplicaciones';
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
        nombreDeAplicacion,
        estadoDeAplicacion,
        nombreDeSegmento,
        servicio,
        aliado,
        onInputChange,
        onResetForm
    } = useForm({
        'nombreDeAplicacion': '',
        'estadoDeAplicacion': '',
        'nombreDeSegmento': '',
        'servicio': '',
        'aliado': ''
    });

    const { aplicaciones, addAplicacion } = useCrudAplicaciones();

    const agregarAplicacion = () => {
        addAplicacion(
            nombreDeAplicacion,
            estadoDeAplicacion,
            nombreDeSegmento,
            servicio,
            aliado
        )
        onResetForm();
    }

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
                    <Typography variant="h4" color="inherit" mb={2}>
                        Agregar aplicacion
                    </Typography>
                    <TextField
                        label="Nombre de aplicación"
                        name='nombreDeAplicacion'
                        value={nombreDeAplicacion}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        name="estadoDeAplicacion"
                        value={estadoDeAplicacion}
                        onChange={onInputChange}
                        label="Estado de aplicacion"
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}
                        select
                    >
                        <MenuItem value={"Activo"} >Activo</MenuItem>
                        <MenuItem value={"Inactivo"} >Inactivo</MenuItem>
                    </TextField>
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
                        name="servicio"
                        value={servicio}
                        onChange={onInputChange}
                        label="Servicio"
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}
                        select
                    >
                        {
                            aplicaciones.map(({ idServicioNavigation }) => (
                                <MenuItem
                                    key={idServicioNavigation.idServicio}
                                    value={idServicioNavigation.idServicio}
                                >
                                    {idServicioNavigation.nombreServicio}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <TextField
                        name="aliado"
                        value={aliado}
                        onChange={onInputChange}
                        label="Aliado"
                        size="small"
                        fullWidth
                        select
                    >
                        {
                            aplicaciones.map(({ idAliadoNavigation }) => (
                                <MenuItem
                                    key={idAliadoNavigation.idAliado}
                                    value={idAliadoNavigation.idAliado}
                                >
                                    {idAliadoNavigation.nombreAliado}
                                </MenuItem>
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
