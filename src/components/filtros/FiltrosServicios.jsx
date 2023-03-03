import { Box } from '@mui/system';
import { ArrowBackIos, CleaningServices, Search } from '@mui/icons-material';
import { Container, Typography, TextField, Button, IconButton } from '@mui/material';

import { useFiltrosServicios } from './hooks';
import { useCrudServicios } from '../../hooks/useCrudServicios';
import { useForm } from '../../hooks/useForm';

const ArrowBackIosStyle = {
  bgcolor: 'transparent',
  borderRadius: 6,
  padding: '4px',
  paddingLeft: '10px',
  fontSize: '34px',
  boxShadow: '2px 4px 12px -4px rgba(0,0,0,0.75)',
  cursor: 'pointer'
}


export const FiltrosServicios = () => {

  const { searchTerm, onInputChange, onResetForm } = useForm({ searchTerm: '' });

  const { servicios } = useCrudServicios();
  const { handleDeleteFilters, clickSearch } = useFiltrosServicios(servicios, searchTerm);

  const handleCleanSearch = () => {
    handleDeleteFilters();
    onResetForm();
  }

  return (
    <Container component='div' sx={{ marginTop: 4 }} >
      <Box component='div' display='flex' alignItems='center' marginBottom={4}>
        <IconButton sx={ArrowBackIosStyle} >
          <ArrowBackIos />
        </IconButton>
        <Typography
          variant="h2"
          color="initial"
          fontSize={24}
          display='inline'
          fontWeight="400"
          marginLeft={2}
        >
          Servicios
        </Typography>
      </Box>

      <Box
        component='div'
        padding={2}
        borderRadius={2}
        boxShadow='2px 4px 12px -4px rgba(0,0,0,0.75)'
        marginY={2}
      >
        <TextField
          label="Buscar servicio"
          name="searchTerm"
          value={searchTerm}
          onChange={onInputChange}
          fullWidth
          size="small"
          sx={{ mb: 2 }}
        />

        <Box display='flex' justifyContent='space-between'  >

          {/* // * BOTON PARA LIMPIAR FILTROS */}
          <Button
            onClick={handleCleanSearch}
            variant="contained"
            color='primary'
            sx={{ height: '30px' }}
          >
            <CleaningServices sx={{ fontSize: '16px' }} />
            <Typography marginLeft={1} fontSize='12px'>Limpiar</Typography>
          </Button>

          <Button
            onClick={clickSearch}
            variant="contained"
            color='primary'
            sx={{ height: '30px' }}
          >
            <Search sx={{ fontSize: '16px' }} />
            <Typography marginLeft={1} fontSize='12px'>Buscar</Typography>
          </Button>
        </Box>

      </Box>
    </Container>
  )
}
