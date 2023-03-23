import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Grid, TextField, Button, MenuItem, Typography, Input } from '@mui/material';
import { Container } from '@mui/system';
import { Upload } from '@mui/icons-material';

import { useLoadFile } from '../hooks';
import { useCrudAliados, useForm } from '../../../../hooks';
import { checkingProgress } from '../../../../store/slices/messageCreated';

const dateDate = new Date();
const dateYear = dateDate.getFullYear();
const dateMonth = dateDate.getUTCMonth() + 1;

const formData = {
    aliado: '',
    mes: dateMonth,
    anio: dateYear,
}

const formValidations = {
    aliado: [(value) => value >= 1, 'Debes seleccionar un aliado antes de cargar.'],
}

export const LoadGridInputs = () => {

    const [nameFile, setNameFile] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const dispatch = useDispatch();

    const selectFileRef = useRef();

    const { readFile } = useLoadFile();
    const { aliados } = useCrudAliados();

    const {
        aliado, aliadoValid, anio, mes,
        isFormValid, onResetForm, onInputChange,
    } = useForm(formData, formValidations);

    const fileSelected = selectFileRef.current ? selectFileRef.current.files[0] : false;
    const fileValidations = !fileSelected || (nameFile.slice(-3) != "txt");

    const handleLoadButton = () => {
        setFormSubmitted(true);
        if (!isFormValid || fileValidations) return;
        dispatch(checkingProgress());

        const dataForCreate = {
            "nombreArchivo": nameFile,
            "usuario": "Ama Gwatterson",
            "estado": "Pendiente",
            "mes": mes,
            "anio": anio,
            "aliado": aliado,
            "fechaServidor": null,
        }
        readFile(fileSelected, dataForCreate, nameFile);

        onResetForm();
        setNameFile("");
        selectFileRef.current.value = "";
        setFormSubmitted(false);
    };

    const handleChangeFileInput = (e) => {
        setNameFile("");
        if (!e.target || !e.target.files[0]) return;
        setNameFile(e.target.files[0].name);
    };

    return (
        <Container component="div" sx={{ marginTop: 4 }} >
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
                Cargue su archivo
            </Typography>
            <Grid
                container
                component="div"
                marginTop={1}
                marginY={2}
                paddingTop={1}
                paddingRight={2}
                spacing={2}
                borderRadius={2}
                boxShadow="2px 4px 12px -4px rgba(0,0,0,0.75)"
            >
                <Grid item xs={6} >
                    <TextField
                        label="Seleccione aliado"
                        name="aliado"
                        value={aliado}
                        onChange={onInputChange}
                        error={!!aliadoValid && formSubmitted}
                        helperText={formSubmitted ? aliadoValid : null}
                        size="small"
                        fullWidth
                        select
                    >
                        {
                            aliados.map((aliado) => {
                                if (aliado.estado == "Activo") {
                                    return (
                                        <MenuItem
                                            key={aliado.idAliado}
                                            value={aliado.idAliado}
                                        >
                                            {aliado.nombreAliado}
                                        </MenuItem>
                                    )
                                }
                            })
                        }
                    </TextField>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        color={(fileValidations && formSubmitted) ? "error" : "primary"}
                        component="label"
                        variant="outlined"
                        htmlFor="file-upload"
                        fullWidth
                    >
                        <Upload sx={{ mr: 1 }} />
                        {
                            nameFile
                                ? nameFile
                                : 'Seleccione Archivo'
                        }
                    </Button>
                    {(fileValidations && formSubmitted) && (
                        <Typography color="error" fontSize={12} marginTop="4px" marginX="14px" >
                            Selecciona un archivo .txt antes de cargarlo.
                        </Typography>
                    )}
                    <Input
                        id="file-upload"
                        inputRef={selectFileRef}
                        onChange={handleChangeFileInput}
                        type="file"
                        accept=".txt"
                        multiline={false}
                        style={{ display: 'none' }}
                        inputProps={{
                            accept: ".txt"
                        }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label={`Mes`}
                        name="mes"
                        value={mes}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        disabled
                        sx={{ mb: 3 }}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                        label={`Año`}
                        name="anio"
                        value={anio}
                        onChange={onInputChange}
                        size="small"
                        fullWidth
                        disabled
                        sx={{ mb: 3 }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Button
                        sx={{ mb: 3 }}
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
