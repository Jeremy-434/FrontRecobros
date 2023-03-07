import { Table, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

export const StyledTableCell = styled(TableCell)(({ }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#3C6309',
    color: 'white',
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 600,
    height: '60px',
    maxWidth: 90,
    padding: 4,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    fontWeight: 400,
    textAlign: 'right',
    alignContent: 'right',
    height: '40px',
    padding: 6,
    margin: 0,
  },
}));

export const TablaLayout = ({ children, encabezadoDeTabla, minWidth }) => {


  return (
    <>
      <TableContainer component={Paper} sx={{ overflow: 'auto' }} >
        <Table sx={{ minWidth: minWidth }} aria-label="simple table">
          <TableHead sx={{ '&.MuiTableCell-root': { height: '70px' } }} >
            <TableRow >
              {encabezadoDeTabla.map(title => (
                <StyledTableCell key={title} >{title}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>

          {children}

        </Table>
      </TableContainer>
    </>
  );
}
