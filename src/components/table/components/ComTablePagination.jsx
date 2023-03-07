import { TablePagination } from '@mui/material'
import { useContext } from 'react';
import { FiltersContext } from '../../../context/filters/filtersContext';

export const ComTablePagination = ({dataFilters}) => {

    const { page, setPage, rowsPerPage, setRowsPerPage } = useContext(FiltersContext);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={dataFilters.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}
