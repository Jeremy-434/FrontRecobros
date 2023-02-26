import { MenuItem } from '@mui/material';
import { FiltrosLayout } from './';

export const FiltrosServicios = () => {
  return (
    <FiltrosLayout modal='Servicios'>
      <MenuItem value={10}>Filtro 3</MenuItem>
      <MenuItem value={20}>Filtro 4</MenuItem>
      <MenuItem value={30}>Filtro 5</MenuItem>
    </FiltrosLayout>
  )
}
