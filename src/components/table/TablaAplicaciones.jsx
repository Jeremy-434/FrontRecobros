import { TablaLayout } from './TablaLayout';

const encabezadoDeTabla = [
  'Aplicacion',
  'Servicio',
  'Nombre de aplicación',
  'Estado de aplicación (ACT/INACT)',
  'Nombre de segmento',
  'Aliado responsable'
]

export const TablaAplicaciones = () => {
  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla} >
    </TablaLayout>
  )
}
