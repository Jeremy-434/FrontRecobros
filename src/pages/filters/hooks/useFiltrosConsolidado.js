import { useContext } from 'react';
import { FirstContext } from '../../../context/first';

export const useFiltrosConsolidado = (data) => {

  // * Contexto global para filtros
  const { filterConsolidados, setFilterConsolidados } = useContext(FirstContext);

  const handleDeleteFilters = () => {
    setFilterConsolidados([]);
  };

  const clickSearch = (dataToSearch) => {
    const results = data.filter(item => {
      if (!dataToSearch.mes) {
        // If the month is empty, return items that match the year
        return item.anio == dataToSearch.anio;
      } else if (!dataToSearch.anio) {
        // If the year is empty, return items that match the month
        return item.mes == dataToSearch.mes;
      } else {
        // If neither the month nor the year is empty, return items that match both
        return item.mes == dataToSearch.mes && item.anio == dataToSearch.anio;
      }
    });
    setFilterConsolidados(results);
  };

  const dataFilters = filterConsolidados.length != 0 ? filterConsolidados : data

  return {
    dataFilters,
    clickSearch,
    handleDeleteFilters
  }
}  