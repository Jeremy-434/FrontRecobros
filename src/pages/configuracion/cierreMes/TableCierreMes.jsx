import { TableBody, TableRow } from '@mui/material';
import { useCrudCierreMes } from '../../../hooks';
import { MoreInfoModal } from '../../components';
import { StyledTableCell, TablaLayout } from '../../layout';

const encabezadoDeTabla = [
  {
    title: 'Mes',
    sxhead: { textAlign: 'left', paddingLeft: 20 }
  },
  { title: 'Año' },
  { title: 'Usuario' },
  { title: 'Fecha servidor' },
  { title: 'Estado' },
  { title: 'Acciones' },
]

const titlePrimaryInList = [
  'Mes',
  'Año',
  'Estado',
  'Usuario',
  'Fecha servidor',
]

export const TableCierreMes = () => {

  const { cierreMes, error } = useCrudCierreMes();

  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla}>
      {
        error
          ? <>Oh, no algo ha ocurrido</>
          : cierreMes ?
            <TableBody>
              {
                cierreMes
                  .map((mes) => (
                    <TableRow
                      key={mes.idCierreMes}
                    >
                      <StyledTableCell>{mes.mes}</StyledTableCell>
                      <StyledTableCell>{mes.anio}</StyledTableCell>
                      <StyledTableCell>{mes.usuario}</StyledTableCell>
                      <StyledTableCell>{mes.fechaServidor}</StyledTableCell>
                      <StyledTableCell>{mes.estado}</StyledTableCell>
                      <StyledTableCell sxbody={{
                        textAlign: 'center',
                        padding: 'auto',
                        display: 'flex',
                        justifyContent: 'space-around'
                      }}
                      >
                        <MoreInfoModal data={mes} titlePrimaryInList={titlePrimaryInList} />
                      </StyledTableCell>
                    </TableRow>
                  ))
              }
            </TableBody>
            : null
      }
    </TablaLayout>
  )
}
