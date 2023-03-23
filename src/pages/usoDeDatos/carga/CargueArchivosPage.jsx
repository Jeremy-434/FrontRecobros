import { PageLayout } from '../../layout';
import { LoadFileTable, LoadGridInputs } from './components';

export const CargueArchivosPage = () => {

  return (
    <PageLayout>
      <LoadGridInputs />
      <LoadFileTable />
    </PageLayout>
  )
}
