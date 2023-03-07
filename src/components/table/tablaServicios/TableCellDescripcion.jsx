import { More } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { ModalForm } from '../layout/ModalForm';
import { StyledTableCell } from '../layout/TablaLayout';

export const TableCellDescripcion = ({descripcion}) => {
    return (
        <StyledTableCell >
            {descripcion.slice(0, 10)}...
            <ModalForm
                nameButton={"Aceptar"}
                styleButton={<More sx={{ fontSize: 16 }} />}
                hiddenStyle={{ display: 'none' }}
                styleIconButton={{ width: 20, padding: 0 }}
                title="Leer mas..."
            >
                <Typography variant="h4" color="inherit" mb={2}>
                    Descripción
                </Typography>
                {descripcion}
            </ModalForm>
        </StyledTableCell>
    )
}
