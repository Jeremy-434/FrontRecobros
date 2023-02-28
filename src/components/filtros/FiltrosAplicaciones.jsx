import { MenuItem } from '@mui/material';
import { FiltrosLayout } from './';
import { ModalAplicaciones } from '../table/addModals/ModalAplicaciones';

export const FiltrosAplicaciones = () => {
  return (
    <FiltrosLayout modal='Aplicaciones'>
      <MenuItem value={10}>Texto contenido</MenuItem>
      <MenuItem value={20}>ACT</MenuItem>
      <MenuItem value={30}>INACT</MenuItem>
    </FiltrosLayout>
  )
}
