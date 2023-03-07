import { useState } from 'react';
import { FiltersContext } from './filtersContext';

export const FiltersProvider = ({ children }) => {

    // * Filtros: servicios y aplicaciones
    const [filterServicios, setFilterServicios] = useState([]);
    const [filterAplicaciones, setFilterAplicaciones] = useState([]);

    // * PAGINACION: oaginas y filas
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    return (
        <FiltersContext.Provider value={{
            //* Filtros para Servicios
            filterServicios,
            setFilterServicios,
            //* Filtros para Aplicaciones
            filterAplicaciones,
            setFilterAplicaciones,

            // * paginas para la paginacion
            page: page,
            setPage,
            rowsPerPage,
            setRowsPerPage
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
