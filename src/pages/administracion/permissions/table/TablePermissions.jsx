import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarFilterButton } from '@mui/x-data-grid';
import { Box, LinearProgress, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { useCrudPermissions } from '../../../../hooks';
import { PermissionsActions } from './PermissionsActions';
import { OptionsList } from './OptionsList';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

export const TablePermissions = () => {

  const [rowId, setRowId] = useState(null);

  const { permissions } = useCrudPermissions();

  // Create a new array of permissions that contains only one permission for each unique idRol value
  const uniquePermissions = permissions.reduce((acc, permission) => {
    if (!acc.some(p => p.idRol === permission.idRol)) {
      acc.push(permission);
    }
    return acc;
  }, []);

  const columns = useMemo(() => [
    {
      field: `idRolNavigation.rol`,
      headerName: 'Rol',
      width: 200,
      valueGetter: (params) => params.row.idRolNavigation.rol,
    },
    {
      field: 'idOpcionNavigation.opcion',
      headerName: 'Permisos en opciones',
      width: 300,
      renderCell: params => <OptionsList roleId={params.row.idRolNavigation.idRol} />
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      type: 'actions',
      width: 100,
      renderCell: params => <PermissionsActions {...{ params }} rowId={rowId} setRowId={setRowId} />
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
        Gestion de Permisos
      </Typography>

      {/* // * Table DataGrid Component */}
      <DataGrid
        columns={columns}
        rows={uniquePermissions}
        getRowId={row => row.idPermisos}
        pageSizeOptions={[5, 10, 20, 100]}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5
        })}
        slots={{
          toolbar: CustomToolbar,
          loadingOverlay: LinearProgress,
        }}
        onCellClick={params => setRowId(params.id)}
      />
    </Box>
  )
}