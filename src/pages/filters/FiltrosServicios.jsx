import { useFiltrosServicios } from '../../pages/filters/hooks';
import { useCrudServicios } from '../../hooks/useCrudServicios';
import { useForm } from '../../hooks/useForm';
import { FiltrosLayout } from '../../pages/filters/layout';
import { MenuItem, TextField } from '@mui/material';

export const FiltrosServicios = () => {

  const { searchTerm, searchType, onInputChange, onResetForm } = useForm({ searchTerm: '', searchType: '' });

  const { servicios } = useCrudServicios();
  const { handleDeleteFilters, clickSearch } = useFiltrosServicios(servicios, searchTerm);

  const handleCleanSearch = () => {
    handleDeleteFilters();
    onResetForm();
  }

  const handleClickSearch = () => {
    clickSearch(searchType)
  }

  return (
    <FiltrosLayout
      title="Servicios"
      labelText="Buscar servicios"
      handleCleanSearch={handleCleanSearch}
      handleClickSearch={handleClickSearch}
      searchTerm={searchTerm}
      onInputChange={onInputChange}
      modal="Servicios"
      TextFieldSelectFilter={
        <TextField
          label={"Filtrar por"}
          name="searchType"
          value={searchType}
          onChange={onInputChange}
          fullWidth
          select
          size="small"
          sx={{ mb: 2 }}
        >
          <MenuItem value="servicio">Servicio</MenuItem>
          <MenuItem value="driver">Driver</MenuItem>
          <MenuItem value="clase de atividad">Clase de actividad</MenuItem>
          <MenuItem value="clase de costo">Clase de costo</MenuItem>
          <MenuItem value="responsable">Responsable</MenuItem>
          <MenuItem value="comparacion">% de comparación</MenuItem>
          <MenuItem value="descripcion">Descripción</MenuItem>
        </TextField>
      }
      searchType={searchType}
    />
  )
}
