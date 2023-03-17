import { useDispatch } from 'react-redux';
import { checkingProgress, handleMessageOpen, setMessage } from '../../../store/slices/messageCreated';
import { useCrudControlArchivos } from '../../../hooks';
import { useUploadArchivoMutation } from '../../../store/apis';

export const useLoadFile = () => {

  //* Dispatch de los mensajes correspondientes
  const dispatch = useDispatch();
  //* Hook que llama al rtk.query que proveer una funcion "addControlArchivo" para agregar 
  const { addControlArchivo } = useCrudControlArchivos();
  //* Rtk-Query que provee una funcion "uploadArchivo" para cargar el archivo en la ruta
  const [uploadArchivo] = useUploadArchivoMutation();

  //* Funcion que lee todo el txt
  const readFile = (valueFile, dataForCreate) => {

    if (!valueFile) return;

    //* Constante formData para enviar el archivo por la funcion "uploadArchivo"
    const fileFormData = new FormData();
    fileFormData.append("file", valueFile);

    uploadArchivo(fileFormData)
      .then((res) => {
        if (res.error) {
          dispatch(setMessage({
            text: res.error.data ?? `Lo sentimos, el archivo no puede superar los 30MB`,
            severity: 'error'
          }));
          dispatch(handleMessageOpen());
        } else {
          // //* Se añade la data pasada por parametro para agregar una fila a tbControlArchivo a la base de datos
          addControlArchivo(dataForCreate);
          //* Mensaje de confirmacion
          dispatch(setMessage({ text: "El archivo se cargo correctamente", severity: 'success' }))
          dispatch(handleMessageOpen());
        }
      });
  };

  return {
    readFile
  }
}
