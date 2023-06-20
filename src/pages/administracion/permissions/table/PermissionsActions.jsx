import { Box } from '@mui/material';
import { AddPermissions } from '../components/AddPermissions';
import { RemovePermissions } from '../components/RemovePermissions';

export const PermissionsActions = ({ params, rowId, setRowId }) => {

  return (
    <Box
      sx={{
        m: 1,
        position: 'relative'
      }}
    >
      <AddPermissions idRol={rowId} permiso={params.row} />
      <RemovePermissions idRol={rowId} permiso={params.row} />
    </Box>
  )
}