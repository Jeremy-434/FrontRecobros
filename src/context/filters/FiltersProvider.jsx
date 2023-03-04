import { useState } from 'react';
import { FiltersContext } from './filtersContext';

export const FiltersProvider = ({ children }) => {

    const [filterServicios, setFilterServicios] = useState([]);
    const [filterAplicaciones, setFilterAplicaciones] = useState([]);

    return (
        <FiltersContext.Provider value={{
            //* Filtros para Servicios
            filterServicios,
            setFilterServicios,
            //* Filtros para Aplicaciones
            filterAplicaciones,
            setFilterAplicaciones
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
