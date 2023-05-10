import { useContext } from 'react';
import { FirstContext } from '../../../../context';
import { loadingLogErroresJoinConsolidados } from '../../../../store/apis/logErroresJoinConsolidados/thunks';
import { StyledTableCell, TablaLayout } from '../../../layout';
import { TableBody, TableRow } from '@mui/material';
import { ComTablePagination } from '../../../components';
import { MoreInfoLogsAndCons } from './MoreInfoLogsAndCons';
import { useFiltrosLogErroresJoinConsolidados } from '../../../filters/hooks';

const encabezadoDeTabla = [
    {
        title: "Fecha",
        sxhead: { minWidth: '120px' }
    },
    {
        title: "Descripción",
        sxhead: { minWidth: '120px' }
    },
    // {
    //     title: "Año",
    //     sxhead: { minWidth: '120px' }
    // },
    // {
    //     title: "Mes",
    //     sxhead: { minWidth: '120px' }
    // },
    {
        title: "Aliado",
        sxhead: { minWidth: '120px' }
    },
    // {
    //     title: "Consolidado",
    //     sxhead: { minWidth: '120px' }
    // },
    {
        title: "Mes",
        sxhead: { textAlign: 'left', paddingLeft: 20 }
    },
    {
        title: "Año",
        sxhead: { minWidth: '120px' }
    },
    { title: "Registro" },
    {
        title: "Nombre",
        sxhead: { minWidth: '120px' }
    },
    {
        title: "Sub servicio",
        sxhead: { minWidth: '120px' }
    },
    {
        title: "Cl. Actividad",
        sxhead: { minWidth: '120px' }
    },
    {
        title: "Cl. Costo",
        sxhead: { minWidth: '120px' }
    },
    { title: "Driver" },
    {
        title: "CECO receptor",
        sxhead: { minWidth: '160px' }
    },
    { title: "Cantidad" },
    // { title: "Fecha" },
    {
        title: "Aplicacion",
        sxhead: { minWidth: '120px' }
    },
    {
        title: "Servicio",
        sxhead: { minWidth: '120px' }
    },
    // {
    //     title: "Aliado",
    //     sxhead: { minWidth: '120px' }
    // },
    { title: "Acciones" },
]

export const TableLogErroresJoinConsolidados = () => {

    const { logErroresJoinConsolidado, error } = loadingLogErroresJoinConsolidados();
    const { dataFilters } = useFiltrosLogErroresJoinConsolidados(logErroresJoinConsolidado);

    const { page, rowsPerPage } = useContext(FirstContext);

    return (
        <>
            <TablaLayout encabezadoDeTabla={encabezadoDeTabla}>
                {
                    error
                        ? console.error("Oh no! algo ha ocurrido")
                        : logErroresJoinConsolidado ?
                            <TableBody>
                                {
                                    dataFilters
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((logError) => (
                                            <TableRow
                                                key={logError.logError.idConsolidado}
                                            >
                                                <StyledTableCell>
                                                    {new Date(logError.logError.fechaServidor).toLocaleDateString() + ' ' + new Date(logError.logError.fechaServidor).toLocaleTimeString()}
                                                </StyledTableCell>
                                                <StyledTableCell>{logError.logError.descripcionError}</StyledTableCell>
                                                <StyledTableCell>{logError.logError.idAliadoNavigation.nombreAliado}</StyledTableCell>
                                                <StyledTableCell>{logError.logError.mes}</StyledTableCell>
                                                <StyledTableCell>{logError.logError.anio}</StyledTableCell>
                                                <StyledTableCell>{logError.consolidado.registro}</StyledTableCell>
                                                <StyledTableCell>{logError.consolidado.nombre}</StyledTableCell>
                                                <StyledTableCell>{logError.consolidado.subServicio}</StyledTableCell>
                                                <StyledTableCell>{logError.consolidado.claseActividad}</StyledTableCell>
                                                <StyledTableCell>{logError.consolidado.claseCosto}</StyledTableCell>
                                                <StyledTableCell>{logError.consolidado.driver}</StyledTableCell>
                                                <StyledTableCell>{logError.consolidado.centroCostoReceptor}</StyledTableCell>
                                                <StyledTableCell>{logError.consolidado.cantidad}</StyledTableCell>
                                                {/* <StyledTableCell>
                                                    {new Date(logError.consolidado.fecha).toLocaleDateString() + ' ' + new Date(logError.consolidado.fecha).toLocaleTimeString()}
                                                </StyledTableCell> */}
                                                <StyledTableCell>{logError.consolidado.idAplicacionNavigation.nombreAplicacion}</StyledTableCell>
                                                <StyledTableCell>{logError.consolidado.idServicioNavigation.nombreServicio}</StyledTableCell>
                                                {/* <StyledTableCell>{logError.consolidado.idServicioNavigation.nombreAliado}</StyledTableCell> */}
                                                <StyledTableCell sxbody={{
                                                    textAlign: 'center',
                                                    padding: 'auto',
                                                    display: 'flex',
                                                    justifyContent: 'space-around'
                                                }}
                                                >
                                                    <MoreInfoLogsAndCons data={logError} />
                                                </StyledTableCell>
                                            </TableRow>
                                        ))
                                }
                            </TableBody>
                            : null
                }
            </TablaLayout>
            <ComTablePagination
                dataFilters={dataFilters}
            />
        </>
    )
}
