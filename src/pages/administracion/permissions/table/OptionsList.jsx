import { Box, List, ListItem, ListItemText } from '@mui/material';
import { useCrudPermissions } from '../../../../hooks';

export const OptionsList = ({ roleId }) => {
  const { permissions } = useCrudPermissions();

  // Filter the permissions array to show only the permissions for the specified role
  const filteredPermissions = permissions.filter(permission => permission.idRol === roleId);

  return (
    <Box sx={{ height: 60 , overflowY: 'scroll' }}>
      <List>
        {filteredPermissions.map(permission => (
          <ListItem key={permission.idPermisos} >
            <ListItemText primary={permission.idOpcionNavigation.opcion} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
