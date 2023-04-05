import { useContext } from 'react';
import { FirstContext } from '../../../context/first';

export const useFiltrosLogErrores = (data) => {

  // * Contexto global para filtros
  const { filterLogErrores, setFilterLogErrores } = useContext(FirstContext);

  const handleDeleteFilters = () => {
    setFilterLogErrores([]);
  };

  const clickSearch = (dataToSearch) => {
    const results = data.filter(
      item => {
        if (item.mes == dataToSearch.mes && item.anio == dataToSearch.anio)
          return item;
      }
    )
    setFilterLogErrores(results);
  };

  const dataFilters = filterLogErrores.length != 0 ? filterLogErrores : data

  return {
    dataFilters,
    clickSearch,
    handleDeleteFilters
  }
}  