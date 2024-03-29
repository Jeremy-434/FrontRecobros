import { useState } from 'react';
import { FirstContext } from './FirstContext';

export const FirstProvider = ({ children }) => {

    // * Filtros: servicios y aplicaciones
    const [filterServicios, setFilterServicios] = useState([]);
    const [filterAplicaciones, setFilterAplicaciones] = useState([]);
    const [filterAliados, setFilterAliados] = useState([]);
    const [filterConsolidados, setFilterConsolidados] = useState([]);
    const [filterLogErrores, setFilterLogErrores] = useState([]);
    const [filterLogErroresJoinConsolidados, setFilterLogErroresJoinConsolidados] = useState([]);

    // * PAGINACION: oaginas y filas
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    //* Booleano de Cierre de mes
    const [mesCerrado, setMesCerrado] = useState(false);

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
            //* Filtros para consolidados
            filterConsolidados,
            setFilterConsolidados,
            //* Filtros para los registros de errores
            filterLogErrores,
            setFilterLogErrores,
            //* Filtros para los registros de errores junto con sus consolidados 
            filterLogErroresJoinConsolidados,
            setFilterLogErroresJoinConsolidados,

            // * Para la paginacion
            page,
            setPage,
            rowsPerPage,
            setRowsPerPage,

            //* Cierre de mes
            mesCerrado,
            setMesCerrado
        }}>
            {children}
        </FirstContext.Provider>
    )
}
