import { useContext } from 'react';

import { TableBody, TableRow } from '@mui/material';

import { FirstContext } from '../../../../context';

import { useCrudAliados } from '../../../../hooks';
import { useFiltrosAliados } from '../../../filters/hooks';

import { StyledTableCell, TablaLayout } from '../../../layout';
import { AlertDelete, ComTablePagination, MoreInfoModal } from '../../../components';
import { EditModalAliados } from '../modals';

const encabezadoDeTabla = [
  {
    title: 'Aliado',
    sxhead: { textAlign: 'left', paddingLeft: 20 }
  },
  { title: 'Usuario' },
  { title: 'Estado' },
  {
    title: 'Responsable',
    sxhead: { textAlign: 'center', paddingLeft: 20 }
  },
  { title: 'Fecha' },
  {
    title: 'Modificacion',
    sxhead: { textAlign: 'center', minWidth: '120px' }
  },
  { title: 'Acciones' }
]

const titlePrimaryInList = [
  "Nombre aliado",
  "Usuario",
  "Estado",
  "Correo del responsable",
  "Fecha",
]

export const TableAliados = () => {

  const { aliados, error, borrarAliado } = useCrudAliados();
  const { dataFilters } = useFiltrosAliados(aliados);
  const dataFiltersReverse = dataFilters.slice().reverse();

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
                  dataFiltersReverse
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((aliado) => (
                      <TableRow
                        key={aliado.idAliado}
                      >
                        <StyledTableCell>{aliado.nombreAliado.slice(0, 20)}</StyledTableCell>
                        <StyledTableCell>{aliado.usuario.slice(0, 20)}</StyledTableCell>
                        <StyledTableCell>{aliado.estado.slice(0, 20)}</StyledTableCell>
                        <StyledTableCell>{aliado.correoResponsable.slice(0, 20)}</StyledTableCell>
                        <StyledTableCell>
                          {new Date(aliado.fecha).toLocaleDateString() + ' ' + new Date(aliado.fecha).toLocaleTimeString()}
                        </StyledTableCell>
                        <StyledTableCell>
                          {
                            (aliado.fechaModificacion != null)
                              ? new Date(aliado.fechaModificacion).toLocaleDateString() + ' ' + new Date(aliado.fechaModificacion).toLocaleTimeString()
                              : "Sin modificaciones"
                          }
                        </StyledTableCell>
                        <StyledTableCell sxbody={{
                          textAlign: 'center',
                          padding: 'auto',
                          display: 'flex',
                          justifyContent: 'space-around'
                        }}
                        >
                          <EditModalAliados {...aliado} />
                          <AlertDelete
                            funtionDelete={() => { borrarAliado(aliado.idAliado) }}
                            title={"Borrar aliado"}
                          />
                          <MoreInfoModal data={aliado} titlePrimaryInList={titlePrimaryInList} />
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
