import { ArrowBackIos, CleaningServices, Search } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Container, Typography, TextField, Stack, Chip, Button, IconButton, Modal } from '@mui/material';
import { ModalAplicaciones } from '../../table/addModals/ModalAplicaciones';
import { useForm } from '../../../hooks';
import { useFiltrosServicios } from '../hooks';
import { ModalServicios } from '../../table/addModals';

const ArrowBackIosStyle = {
  bgcolor: 'transparent',
  borderRadius: 6,
  padding: '4px',
  paddingLeft: '10px',
  fontSize: '34px',
  boxShadow: '2px 4px 12px -4px rgba(0,0,0,0.75)',
  cursor: 'pointer'
}


export const FiltrosLayout = ({ children, modal }) => {

  const { filtros, onInputChange, onResetForm } = useForm({
    'filtros': 10,
  });

  const {filteredData,searchTerm,handleSearch} = useFiltrosServicios();
  // console.log("🚀 ~ filteredData:", filteredData)

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
          {modal}
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
          label="Generar filtros"
          // name="filtros"
          value={searchTerm}
          onChange={handleSearch}
          fullWidth
          size="small"
        />
          {/* {children}
        </TextField> */}
        {/* <ul>
          {filteredData.map((item) => (
            <li key={item.idServicio}>{item.nombreServicio}</li>
          ))}
        </ul> */}
        <Box
          component='div'
          padding={2}
          borderRadius={2}
          border='2px solid #2222'
          marginY={2}
        >
          <Typography fontSize='12px' marginBottom={2} >Criterios de Busqueda</Typography>
          <Stack direction="row" spacing={1}>
            <Chip
              label="ACT"
            />
            <Chip
              label="INACT"
            />
          </Stack>
        </Box>

        <Box display='flex' justifyContent='space-between'  >
          <Button variant="contained" color='primary' sx={{ height: '30px' }} >
            <CleaningServices sx={{ fontSize: '16px' }} />
            <Typography marginLeft={1} fontSize='12px'>Limpiar</Typography>
          </Button>


          {/* {(modal === 'Aplicaciones')
            ?
            <ModalAplicaciones />
            :
            <ModalServicios />
          } */}

          <Button variant="contained" color='primary' sx={{ height: '30px' }} >
            <Search sx={{ fontSize: '16px' }} />
            <Typography marginLeft={1} fontSize='12px'>Buscar</Typography>
          </Button>
        </Box>

      </Box>
    </Container>
  )
}
