import { useFiltrosServicios } from './hooks';
import { useCrudServicios } from '../../hooks/useCrudServicios';
import { useForm } from '../../hooks/useForm';
import { FiltrosLayout } from './layout';

export const FiltrosServicios = () => {

  const { searchTerm, onInputChange, onResetForm } = useForm({ searchTerm: '' });

  const { servicios } = useCrudServicios();
  const { handleDeleteFilters, clickSearch } = useFiltrosServicios(servicios, searchTerm);

  const handleCleanSearch = () => {
    handleDeleteFilters();
    onResetForm();
  }

  return (
    <FiltrosLayout
      title="Servicios"
      labelText="Buscar servicios"
      handleCleanSearch={handleCleanSearch}
      clickSearch={clickSearch}
      searchTerm={searchTerm}
      onInputChange={onInputChange}
    />
  )
}
