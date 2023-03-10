import { FiltrosAplicaciones, TablaAplicaciones } from '../../components';
import { PageLayout } from '../layout/PageLayout';

export const AplicacionesApp = () => {

  return (
    <PageLayout>
      <FiltrosAplicaciones />
      <TablaAplicaciones />
    </PageLayout>
  )
}
