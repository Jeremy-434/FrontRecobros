import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid';
import { loadingUsers } from '../../../../store/auth/UserAccount/thunks';
import { Box, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { UserActions } from '../components';

export const TableAdmin = () => {

  const [rowId, setRowId] = useState(null);

  const { users } = loadingUsers();

  const columns = useMemo(() => [
    { field: 'nombreUsuario', headerName: 'Usuario', width: 150, editable: true, },
    { field: `administrador`, headerName: 'Administrador?', width: 150, type: 'boolean', editable: true, },
    { field: `correo`, headerName: 'Correo', width: 150, },
    { field: 'actions', headerName: 'Acciones', type: 'actions', width: 100, renderCell: params => <UserActions {...{ params }} rowId={rowId} setRowId={setRowId} /> },
  ],[rowId]);

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
        getRowId={row => row.id}
        pageSizeOptions={[5, 10, 20, 100]}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5
        })}
        slots={{
          toolbar: GridToolbar,
        }}
        onCellEditStart={params => setRowId(params.id)}
      />
    </Box>
  )
}
