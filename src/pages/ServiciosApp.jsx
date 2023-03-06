import { FiltrosServicios } from '../components';
import { ModalServicios } from '../components/table/addModals';
import { TablaServicios } from '../components/table/TablaServicios';
import { PageLayout } from './layout/PageLayout';

export const ServiciosApp = () => {
  return (
    <PageLayout>
      <FiltrosServicios />
      <TablaServicios />
      <ModalServicios />
    </PageLayout>
  )
}
