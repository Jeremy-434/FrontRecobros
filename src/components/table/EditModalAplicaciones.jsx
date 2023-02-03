import { Edit } from '@mui/icons-material';
import { Box, Button, IconButton, MenuItem, Modal, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from '../../hooks';
import { useGetAplicacionesQuery, useUpdateAplicacionMutation } from '../../store/apis/aplicacionesApi';

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

export const EditModalAplicaciones = ({
    idAplicacion,
    nombreDeAplicación,
    estadoDeAplicación,
    nombreDeSegmento,
    aliadoResponsable,
    oServicio,
}) => {

    const {
        nombreDeAplicacionInput,
        estadoDeAplicacionInput,
        nombreDeSegmentoInput,
        aliadoResponsableInput,
        servicioInput,
        onInputChange,
        onResetForm
    } = useForm({
        'nombreDeAplicacionInput': nombreDeAplicación,
        'estadoDeAplicacionInput': estadoDeAplicación,
        'nombreDeSegmentoInput': nombreDeSegmento,
        'aliadoResponsableInput': aliadoResponsable,
        'servicioInput': oServicio.servicio1,
    });

    const [updateAplicacion] = useUpdateAplicacionMutation();
    const editarAplicaciones = () => {
        updateAplicacion({
            "idAplicaciones": idAplicacion,
            "nombreDeAplicación": nombreDeAplicacionInput,
            "estadoDeAplicación": estadoDeAplicacionInput,
            "nombreDeSegmento": nombreDeSegmentoInput,
            "aliadoResponsable": aliadoResponsableInput,
            "idServicio": servicioInput
        });
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {data} = useGetAplicacionesQuery();

    return (
        <>
            <IconButton onClick={handleOpen} title='Editar' color='secondary'>
                <Edit />
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
                        label="Id"
                        value={idAplicacion}
                        size="small"
                        disabled
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Nombre de aplicación"
                        name='nombreDeAplicaciónInput'
                        value={nombreDeAplicacionInput}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        label="Estado de aplicacion"
                        name='estadoDeAplicacionInput'
                        value={estadoDeAplicacionInput}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}

                    />
                    <TextField
                        label="Nombre de segmento"
                        name='nombreDeSegmentoInput'
                        value={nombreDeSegmentoInput}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}

                    />
                    <TextField
                        label="Aliado responsable"
                        name='aliadoResponsableInput'
                        value={aliadoResponsableInput}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}

                    />
                    <TextField
                        name="servicioInput"
                        label="Servicio"
                        value={servicioInput}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        select
                    >
                        {
                            data.response.map(({ oServicio }) => (
                                <MenuItem key={oServicio.idServicio} value={oServicio.idServicio}>{oServicio.servicio1}</MenuItem>
                            ))
                        }
                    </TextField>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                        <Button variant="contained" color="primary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => { editarAplicaciones(), handleClose() }}>
                            Actualizar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
