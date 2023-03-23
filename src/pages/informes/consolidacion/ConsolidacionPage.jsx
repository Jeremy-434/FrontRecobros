import { FiltrosConsolidaciones } from '../../filters';
import { PageLayout } from '../../layout';
import { TableConsolidacion } from './tabla/TableConsolidacion';

export const ConsolidacionPage = () => {
    return (
        <PageLayout>
            <FiltrosConsolidaciones />
            <TableConsolidacion />
        </PageLayout>
    )
}
