import { Table, TableContainer, TableHead, TableRow, Paper, LinearProgress } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

export const StyledTableCell = styled(TableCell)(({ }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#316BAE',
    color: 'white',
    textAlign: 'right',
    fontSize: 14,
    fontWeight: 600,
    height: '60px'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    textAlign: 'right',
    height: '50px'
  },
}));

export const TablaLayout = ({ children, encabezadoDeTabla, minWidth }) => {


  return (
    <>
      <TableContainer component={Paper} >
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
