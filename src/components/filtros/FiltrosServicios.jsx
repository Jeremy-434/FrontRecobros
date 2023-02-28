import { MenuItem } from '@mui/material';
import { FiltrosLayout } from './';

export const FiltrosServicios = () => {
  return (
    <FiltrosLayout modal='Servicios'>
      <MenuItem value={10}>Estado</MenuItem>
      <MenuItem value={20}>Nombre de servicio</MenuItem>
      <MenuItem value={30}>Descripcion</MenuItem>
    </FiltrosLayout>
  )
}
