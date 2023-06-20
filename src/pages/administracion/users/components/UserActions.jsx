import { Check, Delete, Save } from '@mui/icons-material';
import { Box, CircularProgress, Fab, IconButton } from '@mui/material';
import { green, red } from '@mui/material/colors';
import { useState } from 'react';
import { useEffect } from 'react';
import { useCrudUsers } from '../../../../hooks';

export const UserActions = ({ params, rowId, setRowId }) => {
  const { upgradeUser, removeUser } = useCrudUsers();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    const { idUsuario, usuario, correo } = params.row;

    setTimeout(() => {
      upgradeUser({
        idUsuario,
        usuario,
        correo,
      }).then(res => {
        setSuccess(true);
        setRowId(null);
      });
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
  }, [rowId])


  const handleDelete = () => {
    setLoadingDelete(true);
    removeUser(params.row.idUsuario)
      .then(res => {
        setRowId(null);
      });
    setLoading(false);
  }

  return (
    <Box
      sx={{
        m: 1,
        position: 'relative',
      }}
    >
      {success ? (
        <IconButton
          color='primary'
          sx={{
            width: 40,
            height: 40,
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
          title='Actualizar'
        >
          <Save />
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
        title='Eliminar'
      >
        <Delete />
      </IconButton>
      {loadingDelete && (
        <CircularProgress
          size={52}
          sx={{
            color: red[400],
            position: 'absolute',
            top: -6,
            left: 42,
            zIndex: 200,
          }}
        />
      )}
    </Box>
  )
}
