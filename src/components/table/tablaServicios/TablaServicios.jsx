import { Delete, More } from '@mui/icons-material';
import { IconButton, TableBody, TableRow, Typography } from '@mui/material';
import { useCrudServicios } from '../../../hooks/useCrudServicios';
import { useFiltrosServicios } from '../../filtros/hooks';
import { EditModalServicios } from '../editModals';
import { ModalForm } from '../layout/ModalForm';
import { StyledTableCell, TablaLayout } from '../layout/TablaLayout';
import { AlertDelete } from '../components/AlertDelete';
import { TableCellDescripcion } from './TableCellDescripcion';

const encabezadoDeTabla = [
  'Servicio',
  'Driver',
  'Cl. Actividad',
  'Cl. Costo',
  'Responsable',
  'Comparacion',
  'Descripción',
  'Acciones -',
]

export const TablaServicios = () => {

  const { servicios, error, borrarServicio } = useCrudServicios();
  const { dataFilters } = useFiltrosServicios(servicios);

  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla} minWidth={1400} >
      {
        error
          ? <>Oh no, algo ha ocurrido!</>
          : servicios ?
            <TableBody>
              {
                (dataFilters).map((servicio) => {
                  if (servicio.idServicio) {
                    return (
                      <TableRow
                        key={servicio.idServicio}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <StyledTableCell component="th" scope="row">
                          {servicio.nombreServicio}
                        </StyledTableCell>
                        <StyledTableCell >{servicio.driver}</StyledTableCell>
                        <StyledTableCell >{servicio.claseActividad}</StyledTableCell>
                        <StyledTableCell >{servicio.claseCosto}</StyledTableCell>
                        <StyledTableCell >{servicio.responsableReporte}</StyledTableCell>
                        <StyledTableCell >{servicio.porcentajeComparacion}%</StyledTableCell>
                        <TableCellDescripcion {...servicio} />
                        <StyledTableCell >
                          <EditModalServicios idServicio={servicio.idServicio} {...servicio} />
                          <AlertDelete
                            funtionDelete={() => { borrarServicio(servicio.idServicio) }}
                            title={"Borrar servicio"}
                          />
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
