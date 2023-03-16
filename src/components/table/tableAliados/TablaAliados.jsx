import { useContext } from 'react';

import { TableBody, TableCell, TableRow } from '@mui/material';

import { FirstContext } from '../../../context';

import { useCrudAliados } from '../../../hooks';
import { useFiltrosAliados } from '../../filtros/hooks';

import { ComTablePagination } from '../components/ComTablePagination';
import { StyledTableCell, TablaLayout } from '../layout/TablaLayout';
import { AlertDelete } from '../components/AlertDelete';
import { EditModalAliados } from '../editModals/EditModalAliados';
import { TableCellWithStyle } from '../components';

const encabezadoDeTabla = [
  {
    title: 'Aliado',
    sx: {
      // textAlign: 'left',
    }
  },
  { title: 'Usuario' },
  { title: 'Estado' },
  { title: 'Correo responsable' },
  { title: 'Fecha' },
  { title: 'Acciones' }
]

export const TablaAliados = () => {

  const { aliados, error, borrarAliado } = useCrudAliados();
  const { dataFilters } = useFiltrosAliados(aliados);

  const { page, rowsPerPage } = useContext(FirstContext);

  return (
    <>
      <TablaLayout encabezadoDeTabla={encabezadoDeTabla} modal="Aliados">
        {
          error
            ? <>Oh, no algo ha ocurrido</>
            : aliados ?
              <TableBody>
                {
                  dataFilters
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((aliado) => (
                      <TableRow
                        key={aliado.idAliado}
                      >
                        <StyledTableCell>{aliado.nombreAliado.slice(0,20)}</StyledTableCell>
                        <StyledTableCell>{aliado.usuario}</StyledTableCell>
                        <StyledTableCell>{aliado.estado}</StyledTableCell>
                        <StyledTableCell>{aliado.correoResponsable}</StyledTableCell>
                        <StyledTableCell>{aliado.fecha}</StyledTableCell>
                        <StyledTableCell sxbody={{ textAlign: 'center', padding: 0, paddingLeft: 0 }} >
                          <EditModalAliados {...aliado} />
                          <AlertDelete
                            funtionDelete={() => { borrarAliado(aliado.idAliado) }}
                            title={"Borrar aliado"}
                          />
                        </StyledTableCell>
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
