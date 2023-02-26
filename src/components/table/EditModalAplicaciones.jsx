import { Edit } from '@mui/icons-material';
import { MenuItem, TextField, Typography } from '@mui/material';
import { useForm } from '../../hooks';
import { useCrudAplicaciones } from '../../hooks/useCrudAplicaciones';
import { useCrudServicios } from '../../hooks/useCrudServicios';
import { ModalForm } from '../filtros/layout/ModalForm';

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

    const { aplicaciones, editAplicaciones } = useCrudAplicaciones();
    const { servicios } = useCrudServicios();

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

    return (
        <ModalForm funtion={editarAplicaciones} nameButton={"Actualizar"} styleButton={<Edit/>}>
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
        </ModalForm>
    )
}
