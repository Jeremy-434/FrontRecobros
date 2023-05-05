import { loadingLogErroresJoinConsolidados } from '../../../../store/apis/logErroresJoinConsolidados/thunks';
import { TablaLayout } from '../../../layout';

const encabezadoDeTabla = [
    {
        title: 'Mes',
        sxhead: { textAlign: 'left', paddingLeft: 20 }
    },
    { title: 'Año' },
    { title: 'Usuario' },
    { title: 'Fecha servidor' },
    { title: 'Estado' },
    { title: 'Acciones' },
]

export const TableLogErroresJoinConsolidados = () => {

    const { logErroresJoinConsolidado, error, isLoading } = loadingLogErroresJoinConsolidados();
    console.log("🚀 ~ logErroresJoinConsolidado:", logErroresJoinConsolidado);

    return (
        <TablaLayout encabezadoDeTabla={encabezadoDeTabla}>
            {/* <div>
                TableLogErrores
            </div> */}
        </TablaLayout>
    )
}
