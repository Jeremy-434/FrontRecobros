import { FiltrosLogErrores } from '../../filters';
import { PageLayout } from '../../layout';
import { TableLogErrores } from './tabla';

export const LogErroresPage = () => {
    return (
        <PageLayout>
            <FiltrosLogErrores />
            <TableLogErrores />
        </PageLayout>
    )
}
