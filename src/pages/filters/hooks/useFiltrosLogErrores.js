import { useContext } from 'react';
import { FirstContext } from '../../../context/first';

export const useFiltrosLogErrores = (data) => {

  // * Contexto global para filtros
  const { filterLogErrores, setFilterLogErrores } = useContext(FirstContext);

  const handleDeleteFilters = () => {
    setFilterLogErrores([]);
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
    setFilterLogErrores(results);
  };

  const dataFilters = filterLogErrores.length != 0 ? filterLogErrores : data

  return {
    dataFilters,
    clickSearch,
    handleDeleteFilters
  }
}  