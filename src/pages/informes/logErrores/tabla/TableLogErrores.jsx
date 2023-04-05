import { useContext } from 'react';
import { FirstContext } from '../../../../context';

import { TableBody, TableRow } from '@mui/material';

import { loadingLogErrores } from '../../../../store/apis/logErrores/thunks';
import { StyledTableCell, TablaLayout } from '../../../layout';
import { ComTablePagination } from '../../../components';
import { useFiltrosLogErrores } from '../../../filters/hooks';

const encabezadoDeTabla = [
  { title: "Fecha" },
  { title: "Descripción" },
  { title: "Año" },
  { title: "Mes" },
  { title: "Aliado" },
  { title: "Consolidado" },
]

export const TableLogErrores = () => {

  const { logErrores, error } = loadingLogErrores();
  const { dataFilters } = useFiltrosLogErrores(logErrores);

  const { page, rowsPerPage } = useContext(FirstContext);

  return (
    <>
      <TablaLayout encabezadoDeTabla={encabezadoDeTabla}>
        {
          error
            ? console.error("Oh no! algo ha ocurrido")
            : logErrores ?
              <TableBody>
                {
                  dataFilters
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((logError) => (
                      <TableRow
                        key={logError.idLogError}
                      >
                        <StyledTableCell>{logError.fechaServidor}</StyledTableCell>
                        <StyledTableCell>{logError.descripcionError}</StyledTableCell>
                        <StyledTableCell>{logError.anio}</StyledTableCell>
                        <StyledTableCell>{logError.mes}</StyledTableCell>
                      </TableRow>
                    ))
                }
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
