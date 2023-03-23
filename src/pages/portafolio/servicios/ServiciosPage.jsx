import { FiltrosServicios } from '../../filters';
import { PageLayout } from '../../layout';
import { TablaServicios } from './tabla';

export const ServiciosPage = () => {
  return (
    <PageLayout>
      <FiltrosServicios />
      <TablaServicios />
    </PageLayout>
  )
}
