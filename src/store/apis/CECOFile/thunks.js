import { useDispatch } from 'react-redux';
import { handleMessageOpen, setMessage } from '../../slices/messageCreated';
import { useUploadCECOFileMutation } from './CECOFileApi';
import { useGetAllCECOsQuery } from '../CECO/CECOApi';

export const CECOFileUploader = () => {

    const { refetch } = useGetAllCECOsQuery();
    const dispatch = useDispatch();
    const [uploadCECOFile] = useUploadCECOFileMutation();

    const sendCECOFile = async (file) => {

        if (!file) return;

        const fileFormData = new FormData();
        fileFormData.append("file", file);

        await uploadCECOFile(fileFormData)
            .then((res) => {
                if ((res.data[0] == "True")) {
                    //* Mensajes de error
                    dispatch(setMessage({
                        text: (res?.data.length == 1) ? res?.data[0] : res?.data.slice(1) ?? "Hubo algun error con el servidor",
                        severity: 'error'
                    }));
                    dispatch(handleMessageOpen());
                } else {
                    //* Mensaje de confirmacion
                    dispatch(setMessage({ 
                        text: "El archivo se cargo correctamente", 
                        severity: 'success' 
                    }))
                    dispatch(handleMessageOpen());
                }
                refetch();
            });
    }

    return {
        sendCECOFile
    }
}