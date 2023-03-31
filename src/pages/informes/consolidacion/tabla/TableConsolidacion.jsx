import { TableBody, TableRow } from '@mui/material';
import { loadingConsolidados } from '../../../../store/apis/consolidados/thunks';
import { StyledTableCell, TablaLayout } from '../../../layout';
import { MoreInfoModalConsolidacion } from './MoreInfoModalConsolidacion';

const encabezadoDeTabla = [
  {
    title: "Mes",
    sxhead: { textAlign: 'left', paddingLeft: 20 }
  },
  { title: "Año" },
  { title: "Registro" },
  {
    title: "Nombre",
    sxhead: { minWidth: '120px' }
  },
  { title: "Servicio" },
  {
    title: "Sub servicio",
    sxhead: { minWidth: '120px' }
  },
  {
    title: "Cl. Actividad",
    sxhead: { minWidth: '120px' }
  },
  {
    title: "Cl. Costo",
    sxhead: { minWidth: '120px' }
  },
  { title: "Driver" },
  {
    title: "CECO receptor",
    sxhead: { minWidth: '160px' }
  },
  // { title: "descripcion_ceco_emisor" },
  { title: "Cantidad" },
  // { title: "tarifa" },
  // { title: "costo" },
  // { title: "detalle" },
  // { title: "regional" },
  // { title: "localidad" },
  // { title: "serial" },
  // { title: "nombre_pc" },
  // { title: "nombre_aliado" },
  // { title: "producto_instalado" },
  // { title: "nombre_aplicacion" },
  { title: "Fecha" },
  // { title: "fecha_modificacion" },
  // { title: "estado_registro" },
  // { title: "id_control_archivo" },
  // { title: "id_aplicacion" },
  // { title: "id_servicio" },
  // { title: "id_aliado" },
  { title: "Acciones" },
]

export const TableConsolidacion = () => {

  const { consolidados, error } = loadingConsolidados();

  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla} maxWidth>
      {
        error
          ? console.error("Oh no, algo ha ocurrido")
          : consolidados ?
            <TableBody>
              {
                consolidados.map((consolidado) => (
                  <TableRow
                    key={consolidado.idConsolidado}
                  >
                    <StyledTableCell>{consolidado.mes}</StyledTableCell>
                    <StyledTableCell>{consolidado.anio}</StyledTableCell>
                    <StyledTableCell>{consolidado.registro}</StyledTableCell>
                    <StyledTableCell>{consolidado.nombre}</StyledTableCell>
                    <StyledTableCell>{consolidado.nombreServicio}</StyledTableCell>
                    <StyledTableCell>{consolidado.subServicio}</StyledTableCell>
                    <StyledTableCell>{consolidado.claseActividad}</StyledTableCell>
                    <StyledTableCell>{consolidado.claseCosto}</StyledTableCell>
                    <StyledTableCell>{consolidado.driver}</StyledTableCell>
                    <StyledTableCell>{consolidado.centroCostoReceptor}</StyledTableCell>
                    <StyledTableCell>{consolidado.cantidad}</StyledTableCell>
                    <StyledTableCell>{consolidado.fecha}</StyledTableCell>
                    <StyledTableCell sxbody={{
                      textAlign: 'center',
                      padding: 'auto',
                      display: 'flex',
                      justifyContent: 'space-around'
                    }}
                    >
                      <MoreInfoModalConsolidacion data={consolidado} />
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
