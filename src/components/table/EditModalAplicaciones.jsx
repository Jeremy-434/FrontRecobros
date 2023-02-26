import { Edit } from '@mui/icons-material';
import { Box, Button, IconButton, MenuItem, Modal, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from '../../hooks';
import { useCrudAplicaciones } from '../../hooks/useCrudAplicaciones';

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
    nombreAplicacion,
    estado,
    nombreSegmento,
    idAliadoNavigation,
    idServicioNavigation,
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
        'nombreDeAplicacionInput': nombreAplicacion,
        'estadoDeAplicacionInput': estado,
        'nombreDeSegmentoInput': nombreSegmento,
        'servicioInput': idServicioNavigation.idServicio,
        'aliadoResponsableInput': idAliadoNavigation.idAliado
    });

    const {aplicaciones, editAplicaciones} = useCrudAplicaciones()
    
    const editarAplicaciones = () => {
        editAplicaciones(
            idAplicacion,
            nombreDeAplicacionInput,
            estadoDeAplicacionInput,
            nombreDeSegmentoInput,
            servicioInput,
            aliadoResponsableInput,
        )
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        name='nombreDeAplicacionInput'
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
                        select
                        sx={{ mb: 2 }}

                    >
                        <MenuItem value={"Activo"} >Activo</MenuItem>
                        <MenuItem value={"Inactivo"} >Inactivo</MenuItem>
                    </TextField>
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
                        name="aliadoResponsableInput"
                        label="Aliado Responsable"
                        value={aliadoResponsableInput}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        sx={{ mb: 2 }}
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
