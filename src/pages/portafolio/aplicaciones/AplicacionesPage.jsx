import { FiltrosAplicaciones } from '../../../components';
import { PageLayout } from '../../layout';
import { TablaAplicaciones } from './tabla';


export const AplicacionesPage = () => {

  return (
    <PageLayout>
      <FiltrosAplicaciones />
      <TablaAplicaciones />
    </PageLayout>
  )
}
