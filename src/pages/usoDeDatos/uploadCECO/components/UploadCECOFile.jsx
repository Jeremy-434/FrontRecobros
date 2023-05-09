import { Upload } from '@mui/icons-material';
import { Button, Container, Grid, Input, Typography } from '@mui/material';
import { useState } from 'react';
import { useRef } from 'react';
import { CECOFileUploader } from '../../../../store/apis/CECOFile/thunks';
import { checkingProgress } from '../../../../store/slices/messageCreated';
import { useDispatch } from 'react-redux';

export const UploadCECOFile = () => {
    const [nameFile, setNameFile] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const selectFileRef = useRef();
    const { sendCECOFile } = CECOFileUploader();
    const dispatch = useDispatch();

    const fileSelected = selectFileRef.current ? selectFileRef.current.files[0] : false;
    const fileValidations = !fileSelected || (nameFile.slice(-3) != "csv");

    const handleLoadButton = () => {
        setFormSubmitted(true);
        if (fileValidations) return;
        dispatch(checkingProgress());
        
        // todo: llamar hook que envia archivo al backend
        sendCECOFile(fileSelected);
        
        setNameFile("");
        selectFileRef.current.value = "";
        setFormSubmitted(false);
    }

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
                Cargue CECO
                <Typography component="div" marginLeft={2.2} marginTop={1} fontSize={12}>Cargue su archivo de centro de costos</Typography>
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
                            Selecciona un archivo '.csv' antes de cargar.
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
                            accept: ".csv"
                        }}
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
