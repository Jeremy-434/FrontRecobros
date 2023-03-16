import { TableCell } from '@mui/material';

export const TableCellWithStyle = ({ children, sx }) => {
    return (
        <TableCell
            sx={{
                textAlign: 'right',
                ...sx
            }}
        >
            {children}
        </TableCell>
    )
}
