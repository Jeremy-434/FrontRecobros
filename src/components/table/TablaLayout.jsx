import { Table, TableBody, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const StyledTableCell = styled(TableCell)(({ }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#316BAE',
    color: 'white',
    textAlign: 'right',
    fontSize: 12,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    textAlign: 'right'
  },
}));

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const TablaLayout = ({ encabezadoDeTabla }) => {
  return (
    <>
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead sx={{ '&.MuiTableCell-root': { height: '10px' } }} >
            <TableRow >
              {encabezadoDeTabla.map(title => (
                <StyledTableCell key={title} >{title}</StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell >{row.calories}</StyledTableCell>
                <StyledTableCell >{row.fat}</StyledTableCell>
                <StyledTableCell >{row.carbs}</StyledTableCell>
                <StyledTableCell >{row.protein}</StyledTableCell>
                <StyledTableCell >{row.protein}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
