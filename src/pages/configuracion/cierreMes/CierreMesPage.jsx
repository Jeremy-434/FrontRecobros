import { PageLayout } from '../../layout';
import { GridCerrarMes } from './GridCerrarMes';
import { TableCierreMes } from './TableCierreMes';

export const CierreMesPage = () => {
    return (
        <PageLayout>
            <GridCerrarMes />
            <TableCierreMes/>
        </PageLayout>
    )
}
