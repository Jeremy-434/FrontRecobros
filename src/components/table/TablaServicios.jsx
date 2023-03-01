import { Delete, More } from '@mui/icons-material';
import { IconButton, LinearProgress, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { useCrudServicios } from '../../hooks/useCrudServicios';
import { useFiltrosServicios } from '../filtros/hooks';
import { EditModalServicios } from './editModals';
import { ModalForm } from './layout/ModalForm';
import { StyledTableCell, TablaLayout } from './layout/TablaLayout';

const encabezadoDeTabla = [
  'Servicio',
  'Descripción del servicio',
  'Driver (No. de usuarios)',
  'Clase de actividad',
  'Clase de costo',
  'Responsable del reporte',
  'Porcentaje de comparacion',
  ''
]

export const TablaServicios = () => {

  const { servicios, error, isLoading, borrarServicio } = useCrudServicios();
  const { filters } = useFiltrosServicios();

  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla} minWidth={1400} >
      {
        error
          ? <>Oh no, algo ha ocurrido!</>
          : isLoading ?
            <TableBody sx={{ width: '100%' }}>
              <TableRow>
                <TableCell>
                  <LinearProgress />
                </TableCell>
              </TableRow>
            </TableBody>
            : servicios ?
              <TableBody>
                {
                  (filters.filters.length != 0 ? filters.filters : servicios).map((servicio) => {
                  if (servicio.idServicio) {
                    return (
                      <TableRow
                        key={servicio.idServicio}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <StyledTableCell component="th" scope="row">
                          {servicio.nombreServicio}
                        </StyledTableCell>
                        <StyledTableCell >
                          {servicio.descripcion.slice(0, 30)}... 
                          <ModalForm
                            nameButton={"Aceptar"}
                            styleButton={<More sx={{ fontSize: 16 }} />}
                            hiddenStyle={{display: 'none'}}
                            styleIconButton={{ width: 20, padding: 0}}
                            title="Leer mas..."
                          >
                            <Typography variant="h4" color="inherit" mb={2}>
                              Descripción
                            </Typography>
                            {servicio.descripcion}
                          </ModalForm>
                        </StyledTableCell>
                        <StyledTableCell >{servicio.driver}</StyledTableCell>
                        <StyledTableCell >{servicio.claseActividad}</StyledTableCell>
                        <StyledTableCell >{servicio.claseCosto}</StyledTableCell>
                        <StyledTableCell >{servicio.responsableReporte}</StyledTableCell>
                        <StyledTableCell >{servicio.porcentajeComparacion}</StyledTableCell>
                        <StyledTableCell sx={{ display: 'flex', alignItems: 'center' }} >
                          <EditModalServicios idServicio={servicio.idServicio} {...servicio} />
                          <IconButton
                            color="error"
                            title='Borrar'
                            onClick={() => { borrarServicio(servicio.idServicio) }}
                          >
                            <Delete />
                          </IconButton>
                        </StyledTableCell>
                      </TableRow>
                    )
                  } else {
                    return (
                      <>No se encontro ningun id de servicio</>
                    )
                  }
                })}
              </TableBody>
              : null
      }
    </TablaLayout>
  )
}
