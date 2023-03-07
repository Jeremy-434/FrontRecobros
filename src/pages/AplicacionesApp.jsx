import { FiltrosAplicaciones, TablaAplicaciones } from '../components/';
import { ModalAplicaciones } from '../components/table/addModals';
import { PageLayout } from './layout/PageLayout';

export const AplicacionesApp = () => {

  return (
    <PageLayout>
      <FiltrosAplicaciones />
      <TablaAplicaciones />
      {/* <ModalAplicaciones /> */}
    </PageLayout>
  )
}
