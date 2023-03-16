import { PageLayout } from '../layout/PageLayout';
import { LoadFileTable } from './components/LoadFileTable';
import { LoadGridInputs } from './components/LoadGridInputs';

export const CargueArchivosPage = () => {

  return (
    <PageLayout>
      <LoadGridInputs />
      <LoadFileTable/>
    </PageLayout>
  )
}
