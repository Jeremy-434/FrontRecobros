import { Delete, Edit } from '@mui/icons-material';
import { IconButton, LinearProgress, TableBody, TableCell, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';
import { useCrudAplicaciones } from '../../hooks/useCrudAplicaciones';
import { useDeleteAplicacionMutation, useGetAplicacionesQuery } from '../../store/apis/aplicacionesApi';
import { StyledTableCell, TablaLayout } from './layout/TablaLayout';

const encabezadoDeTabla = [
  'Servicio',
  'Descripción del servicio',
  'Driver (No. de usuarios)',
  'Responsable del reporte',
  'Clase de actividad',
  'Clase de costo',
  'Líder de servicio',
  ''
]

export const TablaServicios = () => {

  const [processedIds, setProcessedIds] = useState([]);

  const { aplicaciones, borrarAplicacion, error, isLoading, data } = useCrudAplicaciones();

  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla} minWidth={1400} >
      {
        error
          ? <>Oh no, algo ha ocurrido!</>
          : isLoading ?
            <TableBody sx={{ width: '100%' }}>
              <TableRow>
                <TableCell>
                  <LinearProgress />
                </TableCell>
              </TableRow>
            </TableBody>
            : data ?
              <TableBody>
                {aplicaciones.map(({ oServicio, idServicio }) => {
                  {/* console.log(!processedIds.includes(idServicio))
                  console.log("se ejecuto");
                  console.log(processedIds);
                  if (!processedIds.includes(idServicio)) {
                    setProcessedIds([...processedIds, idServicio]); */}
                  if (idServicio) {
                    return (
                      <TableRow
                        key={idServicio}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <StyledTableCell component="th" scope="row">
                          {oServicio.servicio1}
                        </StyledTableCell>
                        <StyledTableCell >{oServicio.descripciónDelServicio}</StyledTableCell>
                        <StyledTableCell >{oServicio.driverNoDeUsuarios}</StyledTableCell>
                        <StyledTableCell >{oServicio.responsableDelReporte}</StyledTableCell>
                        <StyledTableCell >{oServicio.claseDeActividad}</StyledTableCell>
                        <StyledTableCell >{oServicio.claseDeCosto}</StyledTableCell>
                        <StyledTableCell >{oServicio.líderDeServicio}</StyledTableCell>
                        <StyledTableCell sx={{ display: 'flex', alignItems: 'center' }} >
                          <IconButton color="primary" title='Editar'>
                            <Edit sx={{}} />
                          </IconButton>
                          <IconButton
                            color="error"
                            title='Borrar'
                            onClick={() => { borrarAplicacion(idServicio) }}
                          >
                            <Delete />
                          </IconButton>
                        </StyledTableCell>
                      </TableRow>
                    )
                  } else {
                    return (
                      <>No se encontro ningun id de servicio</>
                    )
                  }
                })}
              </TableBody>
              : null
      }
    </TablaLayout>
  )
}
