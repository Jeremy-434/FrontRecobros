import { useContext } from 'react';

import { TableBody, TableRow } from '@mui/material';

import { FirstContext } from '../../../context';

import { useCrudAliados } from '../../../hooks';
import { useFiltrosAliados } from '../../filtros/hooks';

import { ComTablePagination } from '../components/ComTablePagination';
import { StyledTableCell, TablaLayout } from '../layout/TablaLayout';
import { AlertDelete } from '../components/AlertDelete';
import { EditModalAliados } from '../editModals/EditModalAliados';

const encabezadoDeTabla = [
    { title: 'Aliado' },
    { title: 'Usuario' },
    { title: 'Estado' },
    { title: 'Correo responsable' },
    { title: 'fecha' },
    { title: 'Acciones' }
]

export const TablaAliados = () => {

    const { aliados, error, borrarAliado } = useCrudAliados();
    const { dataFilters } = useFiltrosAliados(aliados);

    const { page, rowsPerPage } = useContext(FirstContext);

    return (
        <>
            <TablaLayout encabezadoDeTabla={encabezadoDeTabla}>
                {
                    error
                        ? <>Oh, no algo ha ocurrido</>
                        : aliados ?
                            <TableBody>
                                {
                                    dataFilters
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((aliado) => (
                                            <TableRow
                                                key={aliado.idAliado}
                                            >
                                                <StyledTableCell>{aliado.nombreAliado}</StyledTableCell>
                                                <StyledTableCell>{aliado.usuario}</StyledTableCell>
                                                <StyledTableCell>{aliado.estado}</StyledTableCell>
                                                <StyledTableCell>{aliado.correoResponsable}</StyledTableCell>
                                                <StyledTableCell>{aliado.fecha}</StyledTableCell>
                                                <StyledTableCell>
                                                    <EditModalAliados {...aliado} />
                                                    <AlertDelete
                                                        funtionDelete={() => { borrarAliado(aliado.idAliado) }}
                                                        title={"Borrar aliado"}
                                                    />
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
