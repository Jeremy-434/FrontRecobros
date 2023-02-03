import { MenuItem, TextField, Typography } from '@mui/material';
import { useForm } from '../../hooks';
import { ModalForm } from './layout/ModalForm';

export const ModalServicios = () => {
    const {
        servicio1,
        descripciónDelServicio,
        driverNoDeUsuarios,
        responsableDelReporte,
        claseDeActividad,
        claseDeCosto,
        líderDeServicio,
        onInputChange,
        onResetForm
    } = useForm({
        'servicio1': '',
        'descripciónDelServicio': '',
        'driverNoDeUsuarios': '',
        'responsableDelReporte': '',
        'claseDeActividad': '',
        'claseDeCosto': '',
        'líderDeServicio': '',
    });
    return (
        <ModalForm>
            <Typography variant="h4" color="inherit" mb={2}>
                Agregar Servicio
            </Typography>
            <TextField
                label="Nombre del servicio"
                name='servicio1'
                value={servicio1}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Descripción del servicio"
                name='descripciónDelServicio'
                value={descripciónDelServicio}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}

            />
            <TextField
                label="Driver No. de usuarios"
                name='driverNoDeUsuarios'
                value={driverNoDeUsuarios}
                onChange={onInputChange}
                size="small"
                fullWidth
                type="number"
                sx={{ mb: 2 }}

            />
            <TextField
                label="Responsable del reporte"
                name='responsableDelReporte'
                value={responsableDelReporte}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}

            />
            <TextField
                label="Clase de actividad"
                name='claseDeActividad'
                value={claseDeActividad}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}

            />
            <TextField
                label="Clase de costo"
                name='claseDeCosto'
                value={claseDeCosto}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}

            />
            <TextField
                label="Lider del servicio"
                name='líderDeServicio'
                value={líderDeServicio}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}

            />
        </ModalForm>
    )
}
