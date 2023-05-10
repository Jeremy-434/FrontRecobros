import { useEffect } from 'react';
import { useCrudParametros } from '../../../../hooks';

export const useUpdateParametros = (reset) => {

    const { parametros, editarParametro } = useCrudParametros();

    useEffect(() => {
        if (parametros) {
            const dataDefaultValues = {
                "Historico": parametros.numMesesEliminacionHistorico,
                "Columnas": parametros.numColumnasArchivo,
                "TamanioArchivo": parametros.bytesMaxArchivo,
                "ColumnasCECO": parametros.numColumnasCECO,
            }
            reset(dataDefaultValues)
        }
    }, [parametros]);

    const onSubmit = (data) => {
        editarParametro({
            idParametro: parametros.idParametro,
            numMesesEliminacionHistorico: Number(data.Historico) <= 0 ? parametros.numMesesEliminacionHistorico : Number(data.Historico),
            numColumnasArchivo: Number(data.Columnas) <= 0 ? parametros.numColumnasArchivo : Number(data.Columnas),
            bytesMaxArchivo: Number(data.TamanioArchivo) <= 0 ? parametros.bytesMaxArchivo : Number(data.TamanioArchivo),
            numColumnasCECO: Number(data.ColumnasCECO) <= 0 ? parametros.numColumnasCECO : Number(data.ColumnasCECO),
        });
    }
    return {
        onSubmit
    }
}