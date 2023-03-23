import { TablaLayout } from '../../../layout';

const encabezadoDeTabla = [
  { title: "mes" },
  { title: "anio" },
  { title: "registro" },
  { title: "nombre" },
  { title: "nombre_servicio" },
  { title: "sub_servicio" },
  { title: "clase_actividad" },
  { title: "clase_costo" },
  { title: "driver" },
  { title: "centro_costo_receptor" },
  { title: "descripcion_ceco_emisor" },
  { title: "cantidad" },
  { title: "tarifa" },
  { title: "costo" },
  { title: "detalle" },
  { title: "regional" },
  { title: "localidad" },
  { title: "serial" },
  { title: "nombre_pc" },
  { title: "nombre_aliado" },
  { title: "producto_instalado" },
  { title: "nombre_aplicacion" },
  { title: "fecha" },
  { title: "fecha_modificacion" },
  { title: "estado_registro" },
  { title: "id_control_archivo" },
  { title: "id_aplicacion" },
  { title: "id_servicio" },
  { title: "id_aliado" },
]

export const TableConsolidacion = () => {
  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla}>

    </TablaLayout>
  )
}
