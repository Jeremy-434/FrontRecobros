import { useState } from 'react';
import { FirstContext } from './FirstContext';

export const FirstProvider = ({ children }) => {

    // * Filtros: servicios y aplicaciones
    const [filterServicios, setFilterServicios] = useState([]);
    const [filterAplicaciones, setFilterAplicaciones] = useState([]);
    const [filterAliados, setFilterAliados] = useState([])

    // * PAGINACION: oaginas y filas
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    return (
        <FirstContext.Provider value={{
            //* Filtros para Servicios
            filterServicios,
            setFilterServicios,
            //* Filtros para Aplicaciones
            filterAplicaciones,
            setFilterAplicaciones,
            //* Filtros para Aliados
            filterAliados,
            setFilterAliados,

            // * Para la paginacion
            page,
            setPage,
            rowsPerPage,
            setRowsPerPage
        }}>
            {children}
        </FirstContext.Provider>
    )
}
