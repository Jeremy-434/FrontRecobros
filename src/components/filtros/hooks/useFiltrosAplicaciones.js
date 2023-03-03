import { useContext } from 'react';
import { FiltersContext } from '../../../context/filters/filtersContext';

export const useFiltrosAplicaciones = (data, valueInputFiltro) => {

  // * Contexto global para filtros
  const {filterAplicaciones, setFilterAplicaciones} = useContext( FiltersContext );

  const handleDeleteFilters = () => {
    setFilterAplicaciones([]);
  };

  const clickSearch = () => {
    const results = data.filter((item) =>
      item.nombreAplicacion.toLowerCase().includes(valueInputFiltro)
    );

    setFilterAplicaciones(results);
  };

  const dataFilters = filterAplicaciones.length != 0 ? filterAplicaciones : data

  return {
    dataFilters,
    clickSearch,
    handleDeleteFilters
  }
}  