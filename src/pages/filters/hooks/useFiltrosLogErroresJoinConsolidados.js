import { useContext } from 'react';
import { FirstContext } from '../../../context/first';

export const useFiltrosLogErroresJoinConsolidados = (data) => {

    // * Contexto global para filtros
    const { filterLogErroresJoinConsolidados, setFilterLogErroresJoinConsolidados } = useContext(FirstContext);

    const handleDeleteFilters = () => {
        setFilterLogErroresJoinConsolidados([]);
    };

    const clickSearch = (dataToSearch) => {
        const results = data.filter(
            item => {
                if (item.logError.mes == dataToSearch.mes || item.logError.anio == dataToSearch.anio)
                    return item;
            }
        )
        setFilterLogErroresJoinConsolidados(results);
    };

    const dataFilters = filterLogErroresJoinConsolidados.length != 0 ? filterLogErroresJoinConsolidados : data

    return {
        dataFilters,
        clickSearch,
        handleDeleteFilters
    }
}  