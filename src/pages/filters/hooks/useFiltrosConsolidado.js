import { useContext } from 'react';
import { FirstContext } from '../../../context/first';

export const useFiltrosConsolidado = (data) => {

  // * Contexto global para filtros
  const { filterConsolidados, setFilterConsolidados } = useContext(FirstContext);

  const handleDeleteFilters = () => {
    setFilterConsolidados([]);
  };

  const clickSearch = (dataToSearch) => {
    const results = data.filter(
      item => {
        if (item.mes == dataToSearch.mes && item.anio == dataToSearch.anio)
          return item;
      }
    )
    setFilterConsolidados(results);
  };

  const dataFilters = filterConsolidados.length != 0 ? filterConsolidados : data

  return {
    dataFilters,
    clickSearch,
    handleDeleteFilters
  }
}  