import { useCrudAplicaciones, useForm } from '../../hooks';
import { useFiltrosAplicaciones } from './hooks';
import { FiltrosLayout } from './layout';

export const FiltrosAplicaciones = () => {

  const { searchTerm, onInputChange, onResetForm } = useForm({ searchTerm: '' });

  const { aplicaciones } = useCrudAplicaciones();
  const { handleDeleteFilters, clickSearch } = useFiltrosAplicaciones(aplicaciones, searchTerm);

  const handleCleanSearch = () => {
    handleDeleteFilters();
    onResetForm();
  }

  return (
    <FiltrosLayout
      title="Aplicaciones"
      labelText="Buscar aplicaciones"
      handleCleanSearch={handleCleanSearch}
      clickSearch={clickSearch}
      searchTerm={searchTerm}
      onInputChange={onInputChange}
      modal="Aplicaciones"
    />
  )
}

