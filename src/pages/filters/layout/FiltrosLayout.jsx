import { Box } from '@mui/system';
import { CleaningServices, Search } from '@mui/icons-material';
import { Container, Typography, TextField, Button, MenuItem } from '@mui/material';

export const FiltrosLayout = ({
  title,
  handleCleanSearch,
  searchTerm,
  handleClickSearch,
  onInputChange,
  modal,
  TextFieldSelectFilter,
  searchType
}) => {

  return (
    <Container component="div" sx={{ marginTop: 4 }} >
      <Box
        component="div"
        display="flex"
        alignItems="center"
        marginBottom={0}
        justifyContent="space-between"
      >
        {/* //* TITULO DE PAGINA */}
        <Typography
          variant="h2"
          color="initial"
          fontSize={34}
          display="inline"
          fontWeight="400"
          marginLeft={2}
          marginBottom={0}
        >
          {title}
        </Typography>
        {/* //* MODAL PARA AGREGAR
        {(modal == "Aplicaciones") && <ModalAplicaciones />}
        {(modal == "Servicios") && <ModalServicios />}
        {(modal == "Aliados") && <ModalAliados />} */}
      </Box>

      {/* //* INPUTS AL ELEGIR FILTRO */}
      <Box
        component="div"
        padding={2}
        borderRadius={2}
        boxShadow="2px 4px 12px -4px rgba(0,0,0,0.75)"
        marginY={2}
      >
        {TextFieldSelectFilter}
        {
          (searchType == 'estado')
            ?
            <TextField
              label={`Buscar ${searchType} `}
              name="searchTerm"
              value={searchTerm}
              onChange={onInputChange}
              fullWidth
              select
              size="small"
              sx={{ mb: 2 }}
            >
              <MenuItem value="Activo">Activo</MenuItem>
              <MenuItem value="Inactivo">Inactivo</MenuItem>
            </TextField>
            : searchType
              ? <Box>
                <TextField
                  label={`Buscar ${searchType} `}
                  name="searchTerm"
                  value={searchTerm}
                  onChange={onInputChange}
                  fullWidth
                  size="small"
                  sx={{ mb: 2 }}
                />
              </Box>
              : null
        }
        
        {/* //* BOTOTNES */}
        <Box display="flex" justifyContent="space-between"  >

          {/* // * BOTON PARA LIMPIAR FILTROS  */}
          <Button
            onClick={handleCleanSearch}
            variant="contained"
            color="primary"
            sx={{ height: "30px" }}
          >
            <CleaningServices sx={{ fontSize: "16px" }} />
            <Typography marginLeft={1} fontSize="12px">Limpiar</Typography>
          </Button>

          {/* // * BOTON PARA HACER BUSQUEDA FILTRADA  */}
          <Button
            onClick={handleClickSearch}
            variant="contained"
            color="primary"
            sx={{ height: "30px" }}
          >
            <Search sx={{ fontSize: "16px" }} />
            <Typography marginLeft={1} fontSize="12px">Buscar</Typography>
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
