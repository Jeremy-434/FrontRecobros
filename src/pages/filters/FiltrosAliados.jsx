import { MenuItem, TextField } from '@mui/material';
import { useCrudAliados, useForm } from '../../hooks';
import { useFiltrosAliados } from './hooks';
import { FiltrosLayout } from './layout/FiltrosLayout';

export const FiltrosAliados = () => {
    const { searchTerm, searchType, onInputChange, onResetForm } = useForm({ searchTerm: '', searchType: '' });

    const { aliados } = useCrudAliados();
    const { handleDeleteFilters, clickSearch } = useFiltrosAliados(aliados, searchTerm);

    const handleCleanSearch = () => {
        handleDeleteFilters();
        onResetForm();
    }

    const handleClickSearch = () => {
        clickSearch(searchType)
    }
    return (
        <FiltrosLayout
            title="Aliados"
            labelText="Buscar aliados"
            handleCleanSearch={handleCleanSearch}
            handleClickSearch={handleClickSearch}
            searchTerm={searchTerm}
            onInputChange={onInputChange}
            modal="Aliados"
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
                    <MenuItem value="aliado">Aliado</MenuItem>
                    <MenuItem value="estado">Estado</MenuItem>
                    <MenuItem value="usuario">Usuario</MenuItem>
                    <MenuItem value="correo responsable">Correo responsable</MenuItem>
                    <MenuItem value="fecha">Fecha</MenuItem>
                </TextField>
            }
            searchType={searchType}
        />
    )
}
