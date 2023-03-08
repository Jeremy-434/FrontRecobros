import { useContext } from 'react';
import { FirstContext } from '../../../context/first';

export const useFiltrosAplicaciones = (data, valueInputFiltro) => {

  // * Contexto global para filtros
  const { filterAplicaciones, setFilterAplicaciones } = useContext(FirstContext);

  const handleDeleteFilters = () => {
    setFilterAplicaciones([]);
  };

  const clickSearch = (filtersBy) => {
    const results = data.filter((item) => {
      switch (filtersBy) {
        case 'aplicacion':
          return item.nombreAplicacion.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'estado':
          return item.estado.includes(valueInputFiltro.trim());
        case 'segmento':
          return item.nombreSegmento.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'aliado':
          return item.idAliadoNavigation.nombreAliado.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'servicio':
          return item.idServicioNavigation.nombreServicio.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
      }
    }
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