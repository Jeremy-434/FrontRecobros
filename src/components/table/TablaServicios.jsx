import { TablaLayout } from './TablaLayout';

const encabezadoDeTabla = [
  'Servicio',
  'Descrpción del servicio',
  'Driver (No. de usuarios)',
  'Responsable del reporte',
  'Clase de actividad',
  'Clase de costo',
  'Líder de servicio',
]

export const TablaServicios = () => {
  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla} >
    </TablaLayout>
  )
}
