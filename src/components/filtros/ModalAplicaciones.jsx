import { Add } from '@mui/icons-material';
import { Box, Button, IconButton, MenuItem, Modal, TextField, Typography, Link } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { useCrudAplicaciones } from '../../hooks/useCrudAplicaciones';
import { useCrudServicios } from '../../hooks/useCrudServicios';
import { useCreateAplicacionMutation, useGetAplicacionesQuery } from '../../store/apis/aplicacionesApi';
import { ModalForm } from './layout/ModalForm';

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
    const { servicios } = useCrudServicios();

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

    return (
        <ModalForm funtion={agregarAplicacion} nameButton={"agregar"} styleButton={<Add/>}>
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
                    servicios.map((servicio) => (
                        <MenuItem
                            key={servicio.idServicio}
                            value={servicio.idServicio}
                        >
                            {servicio.nombreServicio}
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
        </ModalForm>
    )
}
