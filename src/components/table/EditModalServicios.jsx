import { Edit } from '@mui/icons-material';
import { TextField, Typography } from '@mui/material';
import { useForm } from '../../hooks';
import { useCrudServicios } from '../../hooks/useCrudServicios';
import { ModalForm } from '../filtros/layout/ModalForm';

export const EditModalServicios = ({
    idServicio,
    nombreServicio,
    descripcion,
    driver,
    claseActividad,
    claseCosto,
    porcentajeComparacion,
    responsableReporte,
}) => {

    const {
        nombreServicioInput,
        descripcionInput,
        driverInput,
        claseActividadInput,
        claseCostoInput,
        porcentajeComparacionInput,
        responsableReporteInput,
        onInputChange,
        onResetForm
    } = useForm({
        'nombreServicioInput': nombreServicio,
        'descripcionInput': descripcion,
        'driverInput': driver,
        'claseActividadInput': claseActividad,
        'claseCostoInput': claseCosto,
        'porcentajeComparacionInput': porcentajeComparacion,
        'responsableReporteInput': responsableReporte,
    });

    const { editServicio } = useCrudServicios();

    const editarServicios = () => {
        editServicio(
            idServicio,
            nombreServicioInput,
            descripcionInput,
            driverInput,
            claseActividadInput,
            claseCostoInput,
            porcentajeComparacionInput,
            responsableReporteInput,
        )
    }

    return (
        <ModalForm funtion={editarServicios} nameButton={"Actualizar"} styleButton={<Edit />}>
            <Typography variant="h4" color="inherit" mb={2}>
                Editar servicio
            </Typography>
            <TextField
                label="Id"
                value={idServicio}
                size="small"
                disabled
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Nombre de servicio"
                name='nombreServicioInput'
                value={nombreServicioInput}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Descipcion"
                name='descripcionInput'
                value={descripcionInput}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Driver No. de usuarios"
                name='driverInput'
                value={driverInput}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Clase de actividad"
                name='claseActividadInput'
                value={claseActividadInput}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Clase de costo"
                name='claseCostoInput'
                value={claseCostoInput}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Porcentaje de comparacion"
                name='porcentajeComparacionInput'
                value={porcentajeComparacionInput}
                onChange={onInputChange}
                size="small"
                fullWidth
                sx={{ mb: 2 }}
            />
            <TextField
                label="Responsable del reporte"
                name='responsableReporteInput'
                value={responsableReporteInput}
                onChange={onInputChange}
                size="small"
                fullWidth
            />
        </ModalForm>
    )
}
