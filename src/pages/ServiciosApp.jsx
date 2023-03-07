import { FiltrosServicios, TablaServicios } from '../components';
import { ModalServicios } from '../components/table/addModals';
import { PageLayout } from './layout/PageLayout';

export const ServiciosApp = () => {
  return (
    <PageLayout>
      <FiltrosServicios />
      <TablaServicios />
      {/* <ModalServicios /> */}
    </PageLayout>
  )
}
