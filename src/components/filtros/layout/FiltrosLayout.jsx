import { Box } from '@mui/system';
import { CleaningServices, Search } from '@mui/icons-material';
import { Container, Typography, TextField, Button } from '@mui/material';

export const FiltrosLayout = ({
  title,
  labelText,
  handleCleanSearch,
  searchTerm,
  clickSearch,
  onInputChange
}) => {

  return (
    <Container component='div' sx={{ marginTop: 4 }} >
      <Box component='div' display='flex' alignItems='center' marginBottom={4}>

        <Typography
          variant="h2"
          color="initial"
          fontSize={24}
          display='inline'
          fontWeight="400"
          marginLeft={2}
        >
          {title}
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
          label={labelText}
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
