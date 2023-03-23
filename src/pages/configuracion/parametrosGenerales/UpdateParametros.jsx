import { Box, Container, List, ListItem, Typography, TextField, Button, ListItemText } from '@mui/material';

export const UpdateParametros = () => {
    return (
        <Container component="div" sx={{ marginTop: 4 }} >
            <Box
                component="div"
                display="flex"
                alignItems="center"
                marginBottom={0}
                justifyContent="space-between"
            >
                <Typography
                    variant="h2"
                    component="h2"
                    color="initial"
                    fontSize={34}
                    display="inline"
                    fontWeight="400"
                    marginLeft={2}
                    marginBottom={0}
                >
                    Parametros
                </Typography>
            </Box>
            <Box
                component="div"
                padding={2}
                borderRadius={2}
                boxShadow="2px 4px 12px -4px rgba(0,0,0,0.45)"
                marginY={2}
            >
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Ruta"
                            secondary="Ruta de parada para el archivo cargado"
                        />
                        <TextField
                            size="small"
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Eliminacion de historio"
                            secondary="Numero de meses que se esperan para realizar la eliminación del historico"
                        />
                        <TextField
                            size="small"
                            sx={{ width: '80px' }}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Columnas"
                            secondary="Numero de columnas obligatorias en cada linea del archivo a cargar"
                        />
                        <TextField
                            size="small"
                            sx={{ width: '80px' }}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Tamaño del archivo"
                            secondary="Numero en bytes del tamaño maximo del archivo a cargar"
                        />
                        <TextField
                            size="small"
                            sx={{ width: '140px' }}
                        />
                    </ListItem>
                </List>
            </Box>
            <Box display="flex" justifyContent="right" marginTop={4} >
                <Button variant="contained">
                    Actualizar configuración
                </Button>
            </Box>
        </Container >
    )
}
