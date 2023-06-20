import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarFilterButton } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import { Box, LinearProgress, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { RolesForUsers, UserActions } from '../components';
import { AddUser } from '../components/AddUser';
import { useCrudUsers } from '../../../../hooks';

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <AddUser />
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
    </GridToolbarContainer>
  );
}

export const TableAdmin = () => {

  const [rowId, setRowId] = useState(null);

  const { users } = useCrudUsers();

  const columns = useMemo(() => [
    { field: `usuario`, headerName: 'Usuario', width: 200, editable: true, },
    { field: `correo`, headerName: 'Correo', width: 250, editable: true },
    {
      field: `roles`,
      headerName: 'Roles',
      width: 300,
      renderCell: params => <RolesForUsers {...params} />
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      type: 'actions',
      width: 100,
      renderCell: params => <UserActions {...{ params }} rowId={rowId} setRowId={setRowId} />
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
        Gestión de Usuarios y Roles
      </Typography>

      {/* // * Table DataGrid Component */}
      <DataGrid
        columns={columns}
        rows={users}
        getRowId={row => row.idUsuario}
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
