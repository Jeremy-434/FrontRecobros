import { Delete, Edit } from '@mui/icons-material';
import { IconButton, LinearProgress, TableBody, TableCell, TableRow } from '@mui/material';
import { useCrudServicios } from '../../hooks/useCrudServicios';
import { useFiltrosServicios } from '../filtros/hooks';
import { ModalServicios } from './addModals';
import { EditModalServicios } from './EditModalServicios';
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
  const { filteredData } = useFiltrosServicios();

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
                {servicios.map((servicio) => {
                  if (servicio.idServicio) {
                    return (
                      <TableRow
                        key={servicio.idServicio}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <StyledTableCell component="th" scope="row">
                          {servicio.nombreServicio}
                        </StyledTableCell>
                        <StyledTableCell >{servicio.descripcion}</StyledTableCell>
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
