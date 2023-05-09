import { useContext } from 'react';
import { TableBody, TableRow } from '@mui/material';
import { StyledTableCell, TablaLayout } from '../../../layout/TablaLayout';
import { AlertDelete } from '../../../components/table/AlertDelete';
import { ComTablePagination } from '../../../components/table/ComTablePagination';
import { FirstContext } from '../../../../context';
import { EditModalAplicaciones, MoreInfoModalApliaciones } from '../modals';
import { useFiltrosAplicaciones } from '../../../filters/hooks';
import { useCrudAplicaciones } from '../../../../hooks/useCrudAplicaciones';

const encabezadoDeTabla = [
  {
    title: 'Aplicación',
    sxhead: { textAlign: 'left', paddingLeft: 20 }
  },
  { title: 'Servicio' },
  { title: 'Acciones' }
]

export const TablaAplicaciones = () => {

  const { aplicaciones, borrarAplicacion, error } = useCrudAplicaciones();
  const { dataFilters } = useFiltrosAplicaciones(aplicaciones);
  const dataFiltersReverse = dataFilters.slice().reverse();

  const { page, rowsPerPage } = useContext(FirstContext);

  return (
    <>
      <TablaLayout encabezadoDeTabla={encabezadoDeTabla} minWidth={1200} modal="Aplicaciones" >
        {
          error
            ? <>Oh no, algo ha ocurrido!</>
            : aplicaciones ?
              <TableBody>
                {
                  dataFiltersReverse
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((aplicacion) => (
                      <TableRow
                        key={aplicacion.idAplicacion}
                      >
                        <StyledTableCell>{aplicacion.nombreAplicacion.slice(0, 20)}</StyledTableCell>
                        <StyledTableCell >{aplicacion.idServicioNavigation.nombreServicio.slice(0, 20)}</StyledTableCell>
                        <StyledTableCell sxbody={{
                          textAlign: 'center',
                          padding: 'auto',
                          display: 'flex',
                          justifyContent: 'space-around'
                        }}>
                          <EditModalAplicaciones idAplicacion={aplicacion.idAplicacion} {...aplicacion} />
                          <AlertDelete
                            title={"Borrar aplicación"}
                            funtionDelete={() => { borrarAplicacion(aplicacion.idAplicacion) }}
                          />
                          <MoreInfoModalApliaciones data={aplicacion} />
                        </StyledTableCell>
                      </TableRow>
                    ))}
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
