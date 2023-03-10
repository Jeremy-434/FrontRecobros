
import { Box, Grid, TextField, Button, MenuItem, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Label, Sledding, Upload } from '@mui/icons-material';
import { useLoadFile } from '../hooks/useLoadFile';
import { useForm } from '../../../hooks/useForm';
import { useCrudAplicaciones } from '../../../hooks';
import { useRef, useState } from 'react';

const formData = {
    aliado: '',
    archivoAliado: '',
    mes: '',
    anio: ''
}

const formValidations = {
    aliado: [(value) => value >= 1, 'Selecciona algun aliado'],
}

export const LoadGridInputs = () => {

    const [nameFile, setNameFile] = useState('');

    const { aplicaciones } = useCrudAplicaciones();

    const { onInputChange, aliado, archivoAliado, mes, anio, aliadoValid } = useForm(formData, formValidations);
    const { readFile } = useLoadFile();

    const selectFileRef = useRef();

    const handleLoadButton = () => {
        if (!selectFileRef.current.files[0]) return;
        readFile(selectFileRef.current.files[0]);
    };

    const handleChangeFileInput = (e) => {
        if(!e.target) return;
        setNameFile(e.target.files[0].name);
    }

    const dateDate = new Date();
    const dateYear = dateDate.getFullYear();
    const dateMonth = dateDate.getUTCMonth();

    return (
        <Container component="div" >
            <Typography variant="h4" color="initial" sx={{ mt: 2, mb: 0 }}>Cargue su archivo</Typography>
            <Grid
                container
                spacing={2}
                marginTop={1}
                component="div"
                paddingRight={2}
                paddingTop={1}
                borderRadius={2}
                boxShadow="2px 4px 12px -4px rgba(0,0,0,0.75)"
                marginY={2}
            >
                <Grid item xs={6}>
                    <TextField
                        label="Seleccione aliado"
                        name="aliado"
                        value={aliado}
                        onChange={onInputChange}
                        // error={!!aliadoValid && formSubmitted}
                        // helperText={formSubmitted ? aliadoValid : null}
                        size="small"
                        fullWidth
                        select
                    >
                        {
                            aplicaciones.map(({ idAliadoNavigation }) => (
                                <MenuItem
                                    key={idAliadoNavigation.idAliado}
                                    value={idAliadoNavigation.idAliado}
                                >
                                    {idAliadoNavigation.nombreAliado}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label={`Mes`}
                        name="mes"
                        value={dateMonth + 1}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        disabled
                        sx={{ mb: 1 }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label={`Año`}
                        name="anio"
                        value={dateYear}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        disabled
                        sx={{ mb: 1 }}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Button
                        component="label"
                        variant="outlined"
                        htmlFor="file-upload"
                        sx={{ mb: 2 }}
                        fullWidth
                    >
                        <Upload sx={{ mr: 1 }} />
                        {
                            nameFile 
                            ? nameFile
                            : 'Seleccione Archivo'
                        }
                    </Button>
                    <TextField
                        id="file-upload"
                        inputRef={selectFileRef}
                        onChange={handleChangeFileInput}
                        size="small"
                        fullWidth
                        type={"file"}
                        sx={{ display: 'none' }}
                        inputProps={{
                            multiple: false,
                        }}
                    />
                    {/* <LoadButton/> */}
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleLoadButton}
                    >
                        Cargar
                    </Button>
                </Grid>
            </Grid>
        </Container >
    )
}
