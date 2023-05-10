import { TableBody, TableRow } from '@mui/material';
import { getCECOs } from '../../../../store/apis/CECO/thunks';
import { StyledTableCell, TablaLayout } from '../../../layout';
import { FirstContext } from '../../../../context';
import { useContext } from 'react';
import { ComTablePagination } from '../../../components';

const encabezadoDeTabla = [
    { title: 'Login', },
    { title: 'Nombre', },
    { title: 'CECO', },
    // { title: 'Acciones', }
]

export const TableUploadCECO = () => {

    const { CECOs, error } = getCECOs();
    const { page, rowsPerPage } = useContext(FirstContext);
    return (
        <>
            <TablaLayout encabezadoDeTabla={encabezadoDeTabla}>
                {
                    error
                        ? console.error("Oh no! algo ocurrio, contactate con el servidor")
                        : CECOs ?
                            <TableBody>
                                {
                                    CECOs
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map(ceco => (
                                            <TableRow
                                                key={ceco.idCentroCosto}
                                            >
                                                <StyledTableCell>{ceco.loginUser}</StyledTableCell>
                                                <StyledTableCell>{ceco.nombreUser}</StyledTableCell>
                                                <StyledTableCell>{ceco.ceco}</StyledTableCell>
                                                {/* <StyledTableCell
                                                    sxbody={{
                                                        textAlign: 'center',
                                                        padding: 'auto',
                                                        display: 'flex',
                                                        justifyContent: 'space-around'
                                                    }}
                                                >
                                                    Acciones
                                                </StyledTableCell> */}
                                            </TableRow>
                                        ))
                                }
                            </TableBody>
                            : null
                }
            </TablaLayout>
            <ComTablePagination
                dataFilters={CECOs}
            />
        </>
    )
}
