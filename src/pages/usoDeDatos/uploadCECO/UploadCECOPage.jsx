import { PageLayout } from '../../layout';
import { TableUploadCECO, UploadCECOFile } from './components';

export const UploadCECOPage = () => {
  return (
    <PageLayout>
      <UploadCECOFile />
      <TableUploadCECO />
    </PageLayout>
  )
}
