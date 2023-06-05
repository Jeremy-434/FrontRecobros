import { useContext } from 'react';
import { FirstContext } from '../../../context/first';

export const useFiltrosLogErroresJoinConsolidados = (data) => {

    // * Contexto global para filtros
    const { filterLogErroresJoinConsolidados, setFilterLogErroresJoinConsolidados } = useContext(FirstContext);

    const handleDeleteFilters = () => {
        setFilterLogErroresJoinConsolidados([]);
    };

    const clickSearch = (dataToSearch) => {
        const results = data.filter(item => {
            if (!dataToSearch.mes) {
              // If the month is empty, return items that match the year
              return item.logError.anio == dataToSearch.anio;
            } else if (!dataToSearch.anio) {
              // If the year is empty, return items that match the month
              return item.logError.mes == dataToSearch.mes;
            } else {
              // If neither the month nor the year is empty, return items that match both
              return item.logError.mes == dataToSearch.mes && item.logError.anio == dataToSearch.anio;
            }
          });
        setFilterLogErroresJoinConsolidados(results);
    };

    const dataFilters = filterLogErroresJoinConsolidados.length != 0 ? filterLogErroresJoinConsolidados : data

    return {
        dataFilters,
        clickSearch,
        handleDeleteFilters
    }
}  