import { useContext } from 'react';
import { TableBody, TableRow } from '@mui/material';

import { FirstContext } from '../../../../context';

import { StyledTableCell, TablaLayout } from '../../../layout';
import { ComTablePagination } from '../../../components';

import { useCrudControlArchivos } from '../../../../hooks';

const encabezadoDeTabla = [
  {
    title: 'Archivo',
    sxhead: { textAlign: 'left', paddingLeft: 20 }
  },
  { title: 'Usuario' },
  { title: 'Aliado' },
  { title: 'Mes' },
  { title: 'Anio' },
  { title: 'Fecha servidor' },
  { title: 'Estado ' },
]

export const LoadFileTable = () => {

  const { page, rowsPerPage } = useContext(FirstContext);

  const { controlArchivos, error } = useCrudControlArchivos();
  const controlArchivosReverse = controlArchivos.slice().reverse();

  return (
    <>
      <TablaLayout
        encabezadoDeTabla={encabezadoDeTabla}
        minWidth={600}
      >
        {
          error
            ? <>Oh no, algo ha ocurrido al intentar cargar la tabla. Lo sentimos.</>
            : controlArchivos
              ? <TableBody>
                {
                  controlArchivosReverse
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map(data => {
                      return (
                        <TableRow
                          key={data.idControlArchivo}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <StyledTableCell>{data.nombreArchivo}</StyledTableCell>
                          <StyledTableCell>{data.usuario}</StyledTableCell>
                          <StyledTableCell>{data.idAliadoNavigation.nombreAliado}</StyledTableCell>
                          <StyledTableCell>{data.mes}</StyledTableCell>
                          <StyledTableCell>{data.anio}</StyledTableCell>
                          <StyledTableCell>{data.fechaServidor}</StyledTableCell>
                          <StyledTableCell>{data.estado}</StyledTableCell>
                        </TableRow>
                      )
                    })
                }
              </TableBody>
              : null
        }
      </TablaLayout>
      <ComTablePagination
        dataFilters={controlArchivos}
      />
    </>
  )
}
