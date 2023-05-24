import { Delete, Save } from '@mui/icons-material';
import { Box, CircularProgress, Fab } from '@mui/material';
import { green } from '@mui/material/colors';
import { useState } from 'react';
import { updateUserAccount } from '../../../../store/auth/UserAccount/thunks';
import { useDispatch } from 'react-redux';

export const UserActions = ({ params, rowId, setRowId }) => {

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [succes, setSucces] = useState(false);


  const handleSubmit = () => {
    setLoading(true);
    const { id, administrador, nombreUsuario, correo } = params.row;
    // console.log("🚀 ~ id, administrador, nombreUsuario, correo:", id, administrador, nombreUsuario, correo)
    dispatch(updateUserAccount({
      id,
      nombreUsuario,
      correo,
      administrador,
    }));

    console.log("Se actualizo");

    setLoading(false);
  }

  return (
    <Box
      sx={{
        m: 1,
        position: 'relative'
      }}
    >
      {succes ? (
        <Fab
          color='primary'
          sx={{
            width: 40,
            height: 40,
            bgcolor: green[500],
            '&:hover': { bgcolor: green[700] }
          }}
        >
          <Check />
        </Fab>
      ) : (
        <Fab
          color='primary'
          sx={{
            width: 40,
            height: 40
          }}
          disabled={params.id !== rowId || loading}
          onClick={handleSubmit}
        >
          <Save />
        </Fab>
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
      <Fab
        color='error'
        sx={{
          width: 40,
          height: 40,
          ml: 1
        }}
      >
        <Delete />
      </Fab>
    </Box>
  )
}
