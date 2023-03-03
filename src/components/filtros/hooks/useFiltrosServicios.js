import { useContext } from 'react';
import { FiltersContext } from '../../../context/filters/filtersContext';

export const useFiltrosServicios = (data, valueInputFiltro) => {

  // * Contexto global para filtros
  const {filterServicios, setFilterServicios} = useContext( FiltersContext );

  const handleDeleteFilters = () => {
    setFilterServicios([]);
  };

  const clickSearch = () => {
    const results = data.filter((item) =>
      item.nombreServicio.toLowerCase().includes(valueInputFiltro)
    );

    setFilterServicios(results);
  };

  const dataFilters = filterServicios.length != 0 ? filterServicios : data

  return {
    dataFilters,
    clickSearch,
    handleDeleteFilters
  }
}  