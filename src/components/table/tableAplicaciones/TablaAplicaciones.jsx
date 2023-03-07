import { Delete } from '@mui/icons-material';
import { TableBody, TableRow, IconButton } from '@mui/material';
import { useCrudAplicaciones } from '../../../hooks/useCrudAplicaciones';
import { useFiltrosAplicaciones } from '../../filtros/hooks';
import { EditModalAplicaciones } from '../editModals';
import { StyledTableCell, TablaLayout } from '../layout/TablaLayout';
import { AlertDelete } from '../components/AlertDelete';

const encabezadoDeTabla = [
  'Aplicación',
  'Estado',
  'Segmento',
  'Aliado',
  'Servicio',
  'Acciones'
]

export const TablaAplicaciones = () => {

  const { aplicaciones, borrarAplicacion } = useCrudAplicaciones();
  const { dataFilters } = useFiltrosAplicaciones(aplicaciones);

  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla} minWidth={1200} >
      {
        aplicaciones ?
          <TableBody>
            {
              (dataFilters).map((apli) => (
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
                  <StyledTableCell>
                    <EditModalAplicaciones idAplicacion={apli.idAplicacion} {...apli} />
                    <AlertDelete
                      title={"Borrar aplicación"}
                      funtionDelete={() => { borrarAplicacion(apli.idAplicacion) }}
                    />
                  </StyledTableCell>
                </TableRow>
              ))}
          </TableBody>
          : null
      }
    </TablaLayout>
  )
}
