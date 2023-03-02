import { Delete } from '@mui/icons-material';
import { TableBody, TableRow, IconButton } from '@mui/material';
import { useCrudAplicaciones } from '../../hooks/useCrudAplicaciones';
import { useFiltrosAplicaciones } from '../filtros/hooks';
import { EditModalAplicaciones } from './editModals';
import { StyledTableCell, TablaLayout } from './layout/TablaLayout';

const encabezadoDeTabla = [
  'Nombre de aplicación',
  'Estado de aplicación (ACT/INACT)',
  'Nombre de segmento',
  'Aliado responsable',
  'Servicio',
  ''
]

export const TablaAplicaciones = () => {

  const { aplicaciones, borrarAplicacion } = useCrudAplicaciones();
  const { filters } = useFiltrosAplicaciones();

  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla} minWidth={1200} >
      {
        aplicaciones ?
          <TableBody>
            {
              (filters.filters.length != 0 ? filters.filters : aplicaciones).map((apli) => (
              <TableRow
                key={apli.idAplicacion}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {apli.nombreAplicacion}
                </StyledTableCell>
                <StyledTableCell >{apli.estado}</StyledTableCell>
                <StyledTableCell >{apli.nombreSegmento}</StyledTableCell>
                <StyledTableCell >{apli.idAliadoNavigation.nombreAliado}</StyledTableCell>
                <StyledTableCell >{apli.idServicioNavigation.nombreServicio}</StyledTableCell>
                <StyledTableCell sx={{ display: 'flex' }} >
                  <EditModalAplicaciones idAplicacion={apli.idAplicacion} {...apli} />
                  <IconButton
                    color="error"
                    title='Borrar'
                    onClick={() => { borrarAplicacion(apli.idAplicacion) }}
                  >
                    <Delete />
                  </IconButton>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
          : null
      }
    </TablaLayout>
  )
}
