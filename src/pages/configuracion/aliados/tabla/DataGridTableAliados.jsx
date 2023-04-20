import { ThemeProvider } from '@emotion/react';
import { theme } from '../../../../theme/theme';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useFiltrosAliados } from '../../../filters/hooks';
import { useCrudAliados } from '../../../../hooks';

const columns = [
    {
        field: 'nombreAliado',
        headerName: 'Aliado',
        width: 110,
        headerClassName: 'header-cell',
        // cellClassName: 'header-cell',
    },
    {
        field: 'usuario',
        headerName: 'Usuario',
        width: 110,
    },
    {
        field: 'estado',
        headerName: 'Estado',
        width: 110,
    },
    {
        field: 'correoResponsable',
        headerName: 'Responsable',
        width: 110,
    },
    {
        field: 'fecha',
        headerName: 'Fecha',
        width: 110,
    },
    {
        field: 'fechaModificacion',
        headerName: 'Modificación',
        width: 110,
    },
    { title: 'Acciones' }
]

export const DataGridTableAliados = () => {

    const { aliados } = useCrudAliados();
    const { dataFilters } = useFiltrosAliados(aliados);
    const dataFiltersReverse = dataFilters.slice().reverse();

    return (
        <ThemeProvider theme={theme}>
            <Box style={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={dataFiltersReverse}
                    getRowId={(row) => row.idAliado}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5, 10, 25, 100]}
                />
            </Box>
        </ThemeProvider>
    )
}
