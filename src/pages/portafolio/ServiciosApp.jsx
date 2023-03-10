import { FiltrosServicios, TablaServicios } from '../../components';
import { PageLayout } from '../layout/PageLayout';

export const ServiciosApp = () => {
  return (
    <PageLayout>
      <FiltrosServicios />
      <TablaServicios />
    </PageLayout>
  )
}
