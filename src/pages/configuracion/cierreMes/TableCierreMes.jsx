import { TablaLayout } from '../../layout';

const encabezadoDeTabla = [
    {
      title: 'Mes',
      sxhead: { textAlign: 'left', paddingLeft: 20 }
    },
    { title: 'Año' },
    { title: 'Usuario' },
    { title: 'Fecha servidor' },
    { title: 'Estado' },
  ]

export const TableCierreMes = () => {
    return (
        <TablaLayout encabezadoDeTabla={encabezadoDeTabla}>
            {/* <div>TABLA</div> */}
        </TablaLayout>
    )
}
