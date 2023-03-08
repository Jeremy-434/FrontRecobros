import { useContext } from 'react';

import { TableBody, TableRow } from '@mui/material';

import { EditModalServicios } from '../editModals';
import { StyledTableCell, TablaLayout } from '../layout/TablaLayout';
import { AlertDelete } from '../components/AlertDelete';
import { TableCellDescripcion } from './TableCellDescripcion';

import { useCrudServicios } from '../../../hooks/useCrudServicios';
import { useFiltrosServicios } from '../../filtros/hooks';
import { ComTablePagination } from '../components/ComTablePagination';
import { FirstContext } from '../../../context';

const encabezadoDeTabla = [
  {
    title: 'Servicio',
    height: '60px'
  },
  {
    title: 'Driver'
  },
  {
    title: 'Cl. Actividad'
  },
  {
    title: 'Cl. Costo'
  },
  {
    title: 'Responsable'
  },
  {
    title: 'Comparacion'
  },
  {
    title: 'Descripción'
  },
  {
    title: 'Acciones -'
  },
]

export const TablaServicios = () => {

  const { servicios, error, borrarServicio } = useCrudServicios();
  const { dataFilters } = useFiltrosServicios(servicios);

  const {page, rowsPerPage} = useContext( FirstContext );

  return (
    <>
      <TablaLayout encabezadoDeTabla={encabezadoDeTabla} minWidth={1400} >
        {
          error
            ? <>Oh no, algo ha ocurrido!</>
            : servicios ?
              <TableBody>
                {
                  (dataFilters)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((servicio) => {
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
                        );
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
      <ComTablePagination
        dataFilters={dataFilters}
      />
    </>
  )
}
