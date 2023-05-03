import { FiltrosLogErrores } from '../../filters';
import { PageLayout } from '../../layout';
import { TableLogErrores, TableLogErroresJoinConsolidados } from './tabla';

export const LogErroresPage = () => {
    return (
        <PageLayout>
            <FiltrosLogErrores />
            {/* <TableLogErrores /> */}
            <TableLogErroresJoinConsolidados />
        </PageLayout>
    )
}
