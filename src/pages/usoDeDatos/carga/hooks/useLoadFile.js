import { useDispatch } from 'react-redux';
import { useCrudControlArchivos } from '../../../../hooks';
import { useUploadArchivoMutation } from '../../../../store/apis';
import { handleMessageOpen, setMessage } from '../../../../store/slices/messageCreated';

export const useLoadFile = () => {

  //* Dispatch de los mensajes correspondientes
  const dispatch = useDispatch();
  //* Hook que llama al rtk.query que proveer una funcion "addControlArchivo" para agregar 
  const { addControlArchivo, controlArchivos } = useCrudControlArchivos();
  //* Rtk-Query que provee una funcion "uploadArchivo" para cargar el archivo en la ruta
  const [uploadArchivo] = useUploadArchivoMutation();

  //* Funcion que lee todo el txt
  const readFile = async (valueFile, dataForCreate, nameFile, mes) => {

    if (!valueFile) return;

    // //* Verificar que no se cargue un archivo con el mismo nombre
    // const sameNameValidation = controlArchivos.some(
    //   (item) => {
    //     return item.mes == mes
    //       && item.nombreArchivo.toLowerCase().includes(nameFile.toLowerCase())
    //   }
    // );

    // if (sameNameValidation) {
    //   dispatch(setMessage({
    //     text: `El archivo de nombre ${nameFile} ya se encuentra cargado`,
    //     severity: 'error'
    //   }))
    //   dispatch(handleMessageOpen());
    //   return;
    // }

    //* Constante formData para enviar el archivo por la funcion "uploadArchivo"
    const fileFormData = new FormData();
    fileFormData.append("file", valueFile);

    await uploadArchivo(fileFormData)
      .then((res) => {
        if ((Array.isArray(res?.data) && res?.data[0] === 'True') || res.error) {
          //* Mensajes de error
          dispatch(setMessage({
            text: res?.data.slice(1) ?? "Hubo algun error con el servidor",
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
