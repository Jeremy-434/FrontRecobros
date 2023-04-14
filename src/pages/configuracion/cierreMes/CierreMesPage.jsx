import { PageLayout } from '../../layout';
import { GridCierreMes } from './GridCierreMes';
import { TableCierreMes } from './TableCierreMes';

export const CierreMesPage = () => {
    return (
        <PageLayout>
            <GridCierreMes />
            <TableCierreMes />
        </PageLayout>
    )
}
