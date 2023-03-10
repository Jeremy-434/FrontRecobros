import { TableBody, TableRow } from "@mui/material"
import { useContext } from "react"
import { ComTablePagination } from "../../../components/table/components/ComTablePagination"
import { StyledTableCell, TablaLayout } from "../../../components/table/layout/TablaLayout"
import { FirstContext } from "../../../context"
import { useLoadFile } from "../hooks/useLoadFile"

const encabezadoDeTabla = [
    { title: 'Registro' },
    { title: 'Nombre' },
    { title: 'Null1' },
    { title: 'Null2' },
    { title: 'Null3' },
    { title: 'Archivo' },
    { title: 'Fecha' },
]

export const LoadFileTable = () => {

    const { dataFinalFile } = useLoadFile();

    const { page, rowsPerPage } = useContext(FirstContext);

    return (
        <>
            <TablaLayout
                encabezadoDeTabla={encabezadoDeTabla}
                minWidth={600}
            >
                {
                    dataFinalFile
                        ? <TableBody>
                            {
                                dataFinalFile
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map(data => {
                                        return (
                                            <TableRow
                                                key={data[0]}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <StyledTableCell>{data[0]}asd</StyledTableCell>
                                                <StyledTableCell>{data[1].slice(0, 40)}</StyledTableCell>
                                                <StyledTableCell>{data[2]}</StyledTableCell>
                                                <StyledTableCell>{data[3]}</StyledTableCell>
                                                <StyledTableCell>{data[4]}</StyledTableCell>
                                                <StyledTableCell>{data[5]}</StyledTableCell>
                                                <StyledTableCell>{data[6]}</StyledTableCell>
                                            </TableRow>
                                        )
                                    })
                            }
                        </TableBody>
                        : null
                }
            </TablaLayout>
            <ComTablePagination
                dataFilters={dataFinalFile}
            />
        </>
    )
}
