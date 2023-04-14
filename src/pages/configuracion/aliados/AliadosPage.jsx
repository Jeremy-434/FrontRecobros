import { FiltrosAliados } from '../../filters';
import { PageLayout } from '../../layout';
import { TableAliados } from './tabla';

export const AliadosPage = () => {
    return (
        <PageLayout>
            <FiltrosAliados />
            <TableAliados />
        </PageLayout>
    )
}
