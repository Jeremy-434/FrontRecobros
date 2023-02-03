import { Delete, Edit } from '@mui/icons-material';
import { LinearProgress, TableBody, TableCell, TableRow, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { getAplicacion } from '../../helper/fetchRecobros';
import { useCrudAplicaciones } from '../../hooks/useCrudAplicaciones';
import { useGetAplicacionesQuery, useDeleteAplicacionMutation } from '../../store/apis/aplicacionesApi';
import { EditModalAplicaciones } from './EditModalAplicaciones';
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

  const { aplicaciones, borrarAplicacion, error, isLoading, data} = useCrudAplicaciones();

  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla} minWidth={1200} >
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
                {aplicaciones.map((apli) => (
                  <TableRow
                    key={apli.idAplicaciones}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {apli.nombreDeAplicación}
                    </StyledTableCell>
                    <StyledTableCell >{apli.estadoDeAplicación}</StyledTableCell>
                    <StyledTableCell >{apli.nombreDeSegmento}</StyledTableCell>
                    <StyledTableCell >{apli.aliadoResponsable}</StyledTableCell>
                    <StyledTableCell >{apli.oServicio.servicio1}</StyledTableCell>
                    <StyledTableCell sx={{ display: 'flex' }} >
                      <EditModalAplicaciones idAplicacion={apli.idAplicaciones} {...apli} />
                      <IconButton
                        color="error"
                        title='Borrar'
                        onClick={() => { borrarAplicacion(apli.idAplicaciones) }}
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
