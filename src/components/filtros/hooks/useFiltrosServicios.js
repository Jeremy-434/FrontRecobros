import { useContext } from 'react';
import { FiltersContext } from '../../../context/filters/filtersContext';

export const useFiltrosServicios = (data, valueInputFiltro) => {

  // * Contexto global para filtros
  const { filterServicios, setFilterServicios } = useContext(FiltersContext);

  const handleDeleteFilters = () => {
    setFilterServicios([]);
  };

  const clickSearch = (filtersBy) => {
    console.log("🚀 filtersBy:", filtersBy)
    const results = data.filter((item) => {
      switch (filtersBy) {
        case 'servicio':
          return item.nombreServicio.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'descripcion':
          return item.descripcion.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'driver':
          return item.driver.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'clase de atividad':
          return item.claseActividad.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'clase de costo':
          return item.claseCosto.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'responsable':
          return item.responsableReporte.toLowerCase().includes(valueInputFiltro.toLowerCase().trim());
        case 'comparacion':
          return item.porcentajeComparacion.toString().includes(valueInputFiltro);
      }
    }
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