import { Delete, More } from '@mui/icons-material';
import { IconButton, TableBody, TableRow, Typography } from '@mui/material';
import { useCrudServicios } from '../../hooks/useCrudServicios';
import { useFiltrosServicios } from '../filtros/hooks';
import { EditModalServicios } from './editModals';
import { ModalForm } from './layout/ModalForm';
import { StyledTableCell, TablaLayout } from './layout/TablaLayout';

const encabezadoDeTabla = [
  'Servicio',
  'Driver',
  'Cl. Actividad',
  'Cl. Costo',
  'Responsable',
  'Comparacion',
  'Descripción',
  'Acciones -',
]

export const TablaServicios = () => {

  const { servicios, error, borrarServicio } = useCrudServicios();
  const { dataFilters } = useFiltrosServicios(servicios);

  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla} minWidth={1400} >
      {
        error
          ? <>Oh no, algo ha ocurrido!</>
          : servicios ?
              <TableBody>
                {
                  (dataFilters).map((servicio) => {
                    if (servicio.idServicio) {
                      return (
                        <TableRow
                          key={servicio.idServicio}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <StyledTableCell component="th" scope="row">
                            {servicio.nombreServicio}
                          </StyledTableCell>
                          <StyledTableCell >{servicio.driver}</StyledTableCell>
                          <StyledTableCell >{servicio.claseActividad}</StyledTableCell>
                          <StyledTableCell >{servicio.claseCosto}</StyledTableCell>
                          <StyledTableCell >{servicio.responsableReporte}</StyledTableCell>
                          <StyledTableCell >{servicio.porcentajeComparacion}%</StyledTableCell>
                          <StyledTableCell >
                            {servicio.descripcion.slice(0, 10)}...
                            <ModalForm
                              nameButton={"Aceptar"}
                              styleButton={<More sx={{ fontSize: 16 }} />}
                              hiddenStyle={{ display: 'none' }}
                              styleIconButton={{ width: 20, padding: 0 }}
                              title="Leer mas..."
                            >
                              <Typography variant="h4" color="inherit" mb={2}>
                                Descripción
                              </Typography>
                              {servicio.descripcion}
                            </ModalForm>
                          </StyledTableCell>
                          <StyledTableCell >
                            <EditModalServicios idServicio={servicio.idServicio} {...servicio} />
                            {/* <ModalForm
                              nameButton={"Borrar"}
                              styleButton={<Delete />}
                              hiddenStyle={{ display: 'none' }}
                              hiddenStyleCancelar={{ width: '100%', mt: 0 }}
                              styleIconButton={{ width: 20, padding: 0 }}
                              colorStyleIconButton={"error"}
                              title="Borrar"
                            >

                              <Alert severity="error" >
                                <Typography variant="h4" color="inherit" mb={2}>
                                  Borrar servicio
                                </Typography>
                                ¿Esta seguro de esta accion?
                              </Alert>
                              <Button
                                color="error"
                                variant="contained"
                                fullWidth
                                onClick={() => { borrarServicio(servicio.idServicio) }}
                                sx={{ mt: 2, mb: 0 }}
                              >
                                Borrar
                              </Button>
                            </ModalForm> */}
                            <IconButton
                            color="error"
                            title="Borrar"
                            onClick={() => { borrarServicio(servicio.idServicio) }}
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
