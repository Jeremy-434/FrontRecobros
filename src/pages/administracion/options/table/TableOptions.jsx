import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarFilterButton } from '@mui/x-data-grid';
import { Box, LinearProgress, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { useCrudOptions } from '../../../../hooks';
import { OptionsActions } from './OptionsActions';
import { AddOption } from '../components';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <AddOption />
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

export const TableOptions = () => {

  const [rowId, setRowId] = useState(null);

  const { options } = useCrudOptions();

  const columns = useMemo(() => [
    { field: `opcion`, headerName: 'Opcion', width: 150, editable: true },
    { field: `descripcion`, headerName: 'Descripcion', flex: 1, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 100,
      renderCell: params => <OptionsActions {...{ params }} rowId={rowId} setRowId={setRowId} />
    },
  ], [rowId]);

  return (
    <Box
      sx={{
        height: 400,
        width: '100%'
      }}
    >
      <Typography
        variant="h3"
        component="h3"
        textAlign="center"
        marginTop={3}
        marginBottom={3}
        fontSize={32}
      >
        Gestion de opciones
      </Typography>

      {/* // * Table DataGrid Component */}
      <DataGrid
        columns={columns}
        rows={options}
        getRowId={row => row.idOpcion}
        pageSizeOptions={[5, 10, 20, 100]}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5
        })}
        slots={{
          toolbar: CustomToolbar,
          loadingOverlay: LinearProgress,
        }}
        onCellEditStop={params => setRowId(params.id)}
      />
    </Box>
  )
}
