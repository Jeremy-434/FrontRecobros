import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarFilterButton } from '@mui/x-data-grid';
import { Box, LinearProgress, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { useCrudRoles } from '../../../../hooks';
import { RolesActions } from './RolesActions';
import { AddRole } from '../components';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <AddRole />
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

export const TableRoles = () => {

  const [rowId, setRowId] = useState(null);

  const { roles } = useCrudRoles();

  const columns = useMemo(() => [
    { field: 'rol', headerName: 'Rol', flex: 1, editable: true },
    { field: `descripcion`, headerName: 'Descripción', flex: 2, editable: true },
    {
      field: 'actions',
      headerName: 'Acciones',
      type: 'actions',
      flex: 1,
      renderCell: params => <RolesActions {...{ params }} rowId={rowId} setRowId={setRowId} />
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
        Gestión de Roles
      </Typography>

      {/* // * Table DataGrid Component */}
      <DataGrid
        columns={columns}
        rows={roles}
        getRowId={row => row.idRol}
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

