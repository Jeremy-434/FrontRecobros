import { loadingLogErroresJoinConsolidados } from '../../../../store/apis/logErroresJoinConsolidados/thunks';
import { TablaLayout } from '../../../layout';

export const TableLogErroresJoinConsolidados = () => {

    const { logErroresJoinConsolidado, error, isLoading } = loadingLogErroresJoinConsolidados();
    console.log("🚀 ~ logErroresJoinConsolidado:", logErroresJoinConsolidado);

    return (
        <TablaLayout>
            <div>
                TableLogErrores
            </div>
        </TablaLayout>
    )
}
