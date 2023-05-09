import { useDispatch } from 'react-redux';
import { useCrudControlArchivos } from '../../../../hooks';
import { useUploadArchivoMutation } from '../../../../store/apis';
import { handleMessageOpen, setMessage } from '../../../../store/slices/messageCreated';

export const useLoadFile = () => {

  //* Dispatch de los mensajes correspondientes
  const dispatch = useDispatch();
  //* Hook que llama al rtk.query que proveer una funcion "addControlArchivo" para agregar 
  const { addControlArchivo, controlArchivos, editControlArchivo } = useCrudControlArchivos();
  //* Rtk-Query que provee una funcion "uploadArchivo" para cargar el archivo en la ruta
  const [uploadArchivo] = useUploadArchivoMutation();

  //* Funcion que lee todo el txt
  const uploadFile = async (valueFile, dataForCreate, nameFile, mes, isoDateString) => {

    if (!valueFile) return;

    //* Buscar archivo con mismo mes, mismo nombre, en estado "Pendiente" dentro de controlArchivos y retornar su id
    const pendingControlArchivoIds = controlArchivos.filter(
      (item) => {
        return item.mes == mes
          && item.nombreArchivo.toLowerCase().includes(nameFile.toLowerCase())
          && item.estado === "Pendiente"
      }
    ).map(item => item.idControlArchivo);

    //* Verificar que no se cargue un archivo con el mismo nombre
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
          if (pendingControlArchivoIds.length !== 0) {
            //* Se actualiza la fecha del registro con el mismo nombre y en estado pendiente
            editControlArchivo({
              "idControlArchivo": pendingControlArchivoIds[0],
              "fechaServidor": isoDateString
            })

            //* Mensaje de confirmación
            dispatch(setMessage({ text: "El archivo se actualizo correctamente", severity: 'success' }))
            dispatch(handleMessageOpen());
          } else {
            //* Se añade la data pasada por parametro y se agrega registro en ControlArchivo
            addControlArchivo(dataForCreate);

            //* Mensaje de confirmacion
            dispatch(setMessage({ text: "El archivo se cargo correctamente", severity: 'success' }))
            dispatch(handleMessageOpen());
          }
        }
      });
  };

  return {
    uploadFile
  }
}
