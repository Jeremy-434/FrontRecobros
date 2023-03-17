import { useContext } from 'react';

import { TableBody, TableRow } from '@mui/material';

import { StyledTableCell, TablaLayout } from '../../../layout/TablaLayout';
import { AlertDelete } from '../../../components/table/AlertDelete';
import { ComTablePagination } from '../../../components/table/ComTablePagination';
import { FirstContext } from '../../../../context';
import { EditModalAplicaciones } from '../modals';

import { useFiltrosAplicaciones } from '../../../../components/filtros/hooks';
import { useCrudAplicaciones } from '../../../../hooks/useCrudAplicaciones';

const encabezadoDeTabla = [
  {
    title: 'Aplicación'
  },
  {
    title: 'Estado'
  },
  {
    title: 'Segmento'
  },
  {
    title: 'Aliado'
  },
  {
    title: 'Servicio'
  },
  {
    title: 'Acciones'
  }
]

export const TablaAplicaciones = () => {

  const { aplicaciones, borrarAplicacion, error } = useCrudAplicaciones();
  const { dataFilters } = useFiltrosAplicaciones(aplicaciones);

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
                  (dataFilters)
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((apli) => (
                      <TableRow
                        key={apli.idAplicacion}
                      >
                        <StyledTableCell>{apli.nombreAplicacion}</StyledTableCell>
                        <StyledTableCell >{apli.estado}</StyledTableCell>
                        <StyledTableCell >{apli.nombreSegmento}</StyledTableCell>
                        <StyledTableCell >{apli.idAliadoNavigation.nombreAliado}</StyledTableCell>
                        <StyledTableCell >{apli.idServicioNavigation.nombreServicio}</StyledTableCell>
                        <StyledTableCell sxbody={{ textAlign: 'center', padding: 0, paddingLeft: 0 }}>
                          <EditModalAplicaciones idAplicacion={apli.idAplicacion} {...apli} />
                          <AlertDelete
                            title={"Borrar aplicación"}
                            funtionDelete={() => { borrarAplicacion(apli.idAplicacion) }}
                          />
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
