import { FiltrosAplicaciones, TablaAplicaciones } from '../../components';
import { PageLayout } from '../layout/PageLayout';

export const AplicacionesPage = () => {

  return (
    <PageLayout>
      <FiltrosAplicaciones />
      <TablaAplicaciones />
    </PageLayout>
  )
}
