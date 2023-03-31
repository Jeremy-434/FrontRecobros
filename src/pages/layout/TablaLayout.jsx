import { Table, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

import { ModalAplicaciones, ModalServicios } from '../portafolio';
import { ModalAliados } from '../configuracion';

export const StyledTableCell = styled(TableCell)(({ sxhead, sxbody }) => {
  return {
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#3C6309',
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 600,
      height: '55px',
      maxWidth: 90,
      padding: 4,
      ...sxhead
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 12,
      fontWeight: 400,
      textAlign: 'left',
      height: '40px',
      padding: 6,
      paddingLeft: 20,
      margin: 0,
      ...sxbody
    }
  }
});


export const TablaLayout = ({ children, encabezadoDeTabla, modal }) => {


  return (
    <Paper sx={{ width: '100%'}}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow align="left" colSpan={3}>
              <StyledTableCell sxhead={{ backgroundColor: 'none', textAlign: 'left', height: 'none' }} >
                {/* //* MODAL PARA AGREGAR */}
                {(modal == "Aplicaciones") && <ModalAplicaciones />}
                {(modal == "Servicios") && <ModalServicios />}
                {(modal == "Aliados") && <ModalAliados />}
              </StyledTableCell>
            </TableRow>
            <TableRow >
              {encabezadoDeTabla.map(e => (
                <StyledTableCell
                  key={e.title}
                  sxhead={e.sxhead}
                >
                  {e.title}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>

          {children}

        </Table>
      </TableContainer>
    </Paper>
  );
}
