import { useContext } from 'react';
import { FirstContext } from '../../../context/first';

export const useFiltrosAliados = (data, valueInputFiltro) => {

  // * Contexto global para filtros
  const { filterAliados, setFilterAliados } = useContext(FirstContext);

  const handleDeleteFilters = () => {
    setFilterAliados([]);
  };

  const clickSearch = (filtersBy) => {
    const results = data.filter((item) => {
      switch (filtersBy) {
        case 'aliado':
          return item.nombreAliado.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'estado':
          return item.estado.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'usuario':
          return item.usuario.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'correo responsable':
          return item.correoResponsable.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'fecha':
          return item.fecha.includes(valueInputFiltro.trim());
      }
    }
    );
    setFilterAliados(results);
  };

  const dataFilters = filterAliados.length != 0 ? filterAliados : data

  return {
    dataFilters,
    clickSearch,
    handleDeleteFilters
  }
}  