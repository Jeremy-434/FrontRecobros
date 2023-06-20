import { Check, Delete, Save } from '@mui/icons-material';
import { Box, CircularProgress, Fab, IconButton } from '@mui/material';
import { green } from '@mui/material/colors';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCrudRoles } from '../../../../hooks';

export const RolesActions = ({ params, rowId, setRowId }) => {

  const { editRole, removeRole } = useCrudRoles();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    const { idRol, rol, descripcion } = params.row;
    console.log("🚀 ~ params.row:", params.row);

    editRole({
      idRole: idRol,
      role: rol,
      description: descripcion,
    }).then(res => {
      setSuccess(true);
      setRowId(null);
    });

    setLoading(false);
  };

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
  }, [rowId])


  const handleDelete = () => {
    removeRole(params.row.idRol)
  }

  return (
    <Box
      sx={{
        m: 1,
        position: 'relative'
      }}
    >
      {success ? (
        <IconButton
          color='primary'
          sx={{
            width: 36,
            height: 36,
            bgcolor: green[500],
            '&:hover': { bgcolor: green[700] }
          }}
        >
          <Check />
        </IconButton>
      ) : (
        <IconButton
          color='primary'
          sx={{
            width: 40,
            height: 40
          }}
          disabled={params.id !== rowId || loading}
          onClick={handleSubmit}
        >
          <Save fontSize="small"/>
        </IconButton>
      )}
      {
        loading && (
          <CircularProgress
            size={52}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 200,
            }}
          />
        )
      }
      <IconButton
        color='error'
        sx={{
          width: 40,
          height: 40,
          ml: 1
        }}
        onClick={handleDelete}
      >
        <Delete fontSize="small" />
      </IconButton>
    </Box>
  )
}
