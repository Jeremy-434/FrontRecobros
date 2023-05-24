import { DataGrid } from '@mui/x-data-grid';
import { loadingLogErroresJoinConsolidados } from '../../../../store/apis/logErroresJoinConsolidados/thunks';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useCrudAplicaciones } from '../../../../hooks';
import { GridToolbar } from '@mui/x-data-grid';
import { Delete } from '@mui/icons-material';

const columns = [
    {
        field: 'nombreAplicacion',
        headerName: 'Aplicacion',
        width: 150,
    },
    {
        field: `idServicioNavigation`,
        headerName: 'Servicio',
        width: 150,
        valueGetter: (params) => {
            return params.row.idServicioNavigation.nombreServicio;
        },
    },
    {
        field: 'actions',
        headerName: 'Acciones',
        width: 100,
        //   type: 'actions',
        getActions: (params) => {
            return [
                {
                    icon: <Delete />,
                    tooltip: 'Delete',
                    onClick: () => {
                        console.log(`Deleting row${params}`);
                    },
                },
            ];
        },
    },
]

export const MyFirstMUITable = () => {

    // const { logErroresJoinConsolidado } = loadingLogErroresJoinConsolidados();
    const { aplicaciones } = useCrudAplicaciones();

    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 6,
    });

    return (
        <DataGrid
            columns={columns}
            rows={aplicaciones}
            getRowId={row => row.idAplicacion}
            slots={{
                toolbar: GridToolbar,
            }}
        />
    )
}
