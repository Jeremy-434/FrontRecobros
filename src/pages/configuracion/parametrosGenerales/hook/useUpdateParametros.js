import { useEffect } from 'react';
import { useCrudParametros } from '../../../../hooks';

export const useUpdateParametros = (reset) => {

    const { parametros, editarParametro } = useCrudParametros();

    useEffect(() => {
        if (parametros) {
            const dataDefaultValues = {
                "Ruta": parametros.rutaArchivosProcesar,
                "Historico": parametros.numMesesEliminacionHistorico,
                "Columnas": parametros.numColumnasArchivo,
                "TamanioArchivo": parametros.bytesMaxArchivo,
            }
            reset(dataDefaultValues)
        }
    }, [parametros]);

    const onSubmit = (data) => {
        editarParametro({
            idParametro: parametros.idParametro,
            rutaArchivosProcesar: data.Ruta.length == 0 ? parametros.rutaArchivosProcesar : `${data.Ruta}\\`,
            numMesesEliminacionHistorico: Number(data.Historico) == 0 ? parametros.numMesesEliminacionHistorico : Number(data.Historico),
            numColumnasArchivo: Number(data.Columnas) == 0 ? parametros.numColumnasArchivo : Number(data.Columnas),
            bytesMaxArchivo: Number(data.TamanioArchivo) == 0 ? parametros.bytesMaxArchivo : Number(data.TamanioArchivo),
        })
    }
    return {
        onSubmit
    }
}