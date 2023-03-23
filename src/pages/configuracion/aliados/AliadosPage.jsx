import { FiltrosAliados } from '../../filters';
import { PageLayout } from '../../layout';
import { TablaAliados } from './tabla';

export const AliadosPage = () => {
    return (
        <PageLayout>
            <FiltrosAliados />
            <TablaAliados />
        </PageLayout>
    )
}
