import { Box, Container, List, ListItem, Typography, TextField, Button, ListItemText, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useUpdateParametros } from './hook';

export const UpdateParametros = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            "Historico": "",
            "Columnas": "",
            "TamanioArchivo": "",
            "ColumnasCECO": "",
        }
    });

    const { onSubmit } = useUpdateParametros(reset);

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
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                padding={2}
                borderRadius={2}
                boxShadow="2px 4px 12px -4px rgba(0,0,0,0.45)"
                marginY={2}
            >
                <List>
                    <ListItem>
                        <ListItemText
                            primary="Eliminacion de historio"
                            secondary="Numero de meses que se esperan para realizar la eliminación del historico"
                        />
                        <TextField
                            size="small"
                            type="number"
                            inputProps={{
                                min: 0
                            }}
                            sx={{ width: '200px' }}
                            {...register("Historico", { required: "Escriba el numero de meses" })}
                            error={!!errors.Historico}
                            helperText={errors.Historico?.message}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Columnas"
                            secondary="Numero de columnas obligatorias en cada linea del archivo a cargar"
                        />
                        <TextField
                            size="small"
                            type="number"
                            inputProps={{
                                min: 0
                            }}
                            sx={{ width: '200px' }}
                            {...register("Columnas", { required: "Escriba el numero de columnas" })}
                            error={!!errors.Columnas}
                            helperText={errors.Columnas?.message}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Tamaño del archivo"
                            secondary="Numero en bytes del tamaño maximo del archivo a cargar"
                        />
                        <TextField
                            size="small"
                            type="number"
                            inputProps={{
                                min: 10000000
                            }}
                            sx={{ width: '200px' }}
                            {...register("TamanioArchivo", { required: "Escriba el tamaño del archivo en bytes" })}
                            error={!!errors.TamanioArchivo}
                            helperText={errors.TamanioArchivo?.message}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="Columnas CECO"
                            secondary="Numero de columnas del archivo a cargar"
                        />
                        <TextField
                            size="small"
                            type="number"
                            inputProps={{
                                min: 0
                            }}
                            sx={{ width: '200px' }}
                            {...register("ColumnasCECO", { required: "Escriba un numero de columnas" })}
                            error={!!errors.ColumnasCECO}
                            helperText={errors.ColumnasCECO?.message}
                        />
                    </ListItem>
                </List>
                <Divider/>
                <Box display="flex" justifyContent="center" marginTop={3} >
                    <Button
                        type="submit"
                        variant="contained"
                    >
                        Actualizar configuración
                    </Button>
                </Box>
            </Box>
        </Container >
    )
}
