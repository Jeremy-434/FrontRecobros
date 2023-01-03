import { MenuItem } from '@mui/material';
import { FiltrosLayout } from './';

export const FiltrosAplicaciones = () => {
  return (
    <FiltrosLayout title='Aplicaciones' >
      <MenuItem value={10}>Filtro 1</MenuItem>
      <MenuItem value={20}>Filtro 2</MenuItem>
      <MenuItem value={30}>Filtro 3</MenuItem>
    </FiltrosLayout>
  )
}
