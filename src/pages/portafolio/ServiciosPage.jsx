import { FiltrosServicios, TablaServicios } from '../../components';
import { PageLayout } from '../layout/PageLayout';

export const ServiciosPage = () => {
  return (
    <PageLayout>
      <FiltrosServicios />
      <TablaServicios />
    </PageLayout>
  )
}
