import { FiltrosAliados } from '../../../components';
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
