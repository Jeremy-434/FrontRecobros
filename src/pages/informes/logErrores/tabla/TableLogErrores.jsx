import { TablaLayout } from '../../../layout';

const encabezadoDeTabla = [
  { title: "Fecha" },
  { title: "Descripción" },
  { title: "Año" },
  { title: "Mes" },
  { title: "Aliado" },
  { title: "Consolidado" },
]

export const TableLogErrores = () => {
  return (
    <TablaLayout encabezadoDeTabla={encabezadoDeTabla}>

    </TablaLayout>
  )
}
