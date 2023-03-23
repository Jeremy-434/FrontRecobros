import { MenuItem, TextField } from '@mui/material';
import { useCrudAplicaciones, useForm } from '../../hooks';
import { useFiltrosAplicaciones } from '../../pages/filters/hooks';
import { FiltrosLayout } from '../../pages/filters/layout';

export const FiltrosAplicaciones = () => {

  const { searchTerm, searchType, onInputChange, onResetForm } = useForm({ searchTerm: '', searchType: '' });

  const { aplicaciones } = useCrudAplicaciones();
  const { handleDeleteFilters, clickSearch } = useFiltrosAplicaciones(aplicaciones, searchTerm);

  const handleCleanSearch = () => {
    handleDeleteFilters();
    onResetForm();
  }

  const handleClickSearch = () => {
    clickSearch(searchType)
  }

  return (
    <FiltrosLayout
      title="Aplicaciones"
      labelText="Buscar aplicaciones"
      handleCleanSearch={handleCleanSearch}
      handleClickSearch={handleClickSearch}
      searchTerm={searchTerm}
      onInputChange={onInputChange}
      modal="Aplicaciones"
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
          <MenuItem value="aplicacion">Aplicacion</MenuItem>
          <MenuItem value="estado">Estado</MenuItem>
          <MenuItem value="segmento">Segmento</MenuItem>
          <MenuItem value="aliado">Aliado</MenuItem>
          <MenuItem value="servicio">Servicio</MenuItem>
        </TextField>
      }
      searchType={searchType}
    />
  )
}

