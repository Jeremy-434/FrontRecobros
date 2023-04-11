import { useContext } from 'react';

import { TableBody, TableRow } from '@mui/material';

import { FirstContext } from '../../../../context';

import { StyledTableCell, TablaLayout } from '../../../layout';
import { AlertDelete, ComTablePagination, MoreInfoModal } from '../../../components';
import { EditModalServicios } from '../modals';

import { useFiltrosServicios } from '../../../filters/hooks';
import { useCrudServicios } from '../../../../hooks';

const encabezadoDeTabla = [
  {
    title: 'Servicio',
    sxhead: { textAlign: 'left', paddingLeft: 20 }
  },
  { title: 'Driver' },
  { title: 'Cl. Actividad' },
  { title: 'Cl. Costo' },
  { title: 'Responsable' },
  { title: 'Comparacion' },
  { title: 'Descripción' },
  { title: 'Acciones -' },
]

const titlePrimaryInList = [
  "Nombre del servicio",
  "Descripción",
  "Driver",
  "Responsable del reporte",
  "Clase de actividad",
  "Clase de costo",
  "Porcentaje de comparaciòn",
]


export const TablaServicios = () => {

  const { servicios, error, borrarServicio } = useCrudServicios();
  const { dataFilters } = useFiltrosServicios(servicios);
  const dataFiltersReverse = dataFilters.slice().reverse();

  const { page, rowsPerPage } = useContext(FirstContext);

  return (
    <>
      <TablaLayout encabezadoDeTabla={encabezadoDeTabla} minWidth={1400} modal="Servicios" >
        {
          error
            ? <>Oh no, algo ha ocurrido!</>
            : servicios ?
              <TableBody>
                {
                  (dataFiltersReverse)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((servicio) => {
                      if (servicio.idServicio) {
                        return (
                          <TableRow
                            key={servicio.idServicio}
                          >
                            <StyledTableCell >{servicio.nombreServicio.slice(0, 20)}</StyledTableCell>
                            <StyledTableCell >{servicio.driver.slice(0, 20)}</StyledTableCell>
                            <StyledTableCell >{servicio.claseActividad.slice(0, 20)}</StyledTableCell>
                            <StyledTableCell >{servicio.claseCosto.slice(0, 20)}</StyledTableCell>
                            <StyledTableCell >{servicio.responsableReporte.slice(0, 20)}</StyledTableCell>
                            <StyledTableCell >{servicio.porcentajeComparacion}%</StyledTableCell>
                            <StyledTableCell> {servicio.descripcion.slice(0, 10)}... </StyledTableCell>
                            <StyledTableCell
                              sxbody={{
                                textAlign: 'center',
                                padding: 'auto',
                                display: 'flex',
                                justifyContent: 'space-around'
                              }}
                            >
                              <EditModalServicios idServicio={servicio.idServicio} {...servicio} />
                              <AlertDelete
                                funtionDelete={() => { borrarServicio(servicio.idServicio) }}
                                title={"Borrar servicio"}
                              />
                              <MoreInfoModal data={servicio} titlePrimaryInList={titlePrimaryInList} />
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
