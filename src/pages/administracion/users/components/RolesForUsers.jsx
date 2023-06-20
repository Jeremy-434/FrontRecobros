import { useCrudRolesUsers } from '../../../../hooks';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AddRoleForUser } from './AddRoleForUser';

export const RolesForUsers = (params) => {
    const { rolesUsers } = useCrudRolesUsers();
    const filteredRolesForUsers = rolesUsers.filter(i => i.idUsuario == params.row.idUsuario)

    return (
        <>
            <AddRoleForUser user={params.row} />
            {filteredRolesForUsers.map((ru) => (
                <Box key={ru.idRol} mr={1}>
                    <Typography variant="body1" fontSize={14}>
                        {`${ru.idRolNavigation.rol},`}
                    </Typography>
                </Box>
            ))}
        </>
    );
}
