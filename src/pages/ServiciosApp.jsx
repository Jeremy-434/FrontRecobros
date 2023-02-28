import { Grid } from '@mui/material';
import { FiltrosServicios } from '../components';
import { ModalServicios } from '../components/table/addModals';
import { TablaServicios } from '../components/table/TablaServicios';

export const ServiciosApp = () => {
  return (
    <>
      <Grid
        display='flex'
        flexDirection='column'
        marginX='auto'
        width='75%'
        marginTop={'71px'}
        marginBottom={2}
      >
        <FiltrosServicios />
        <TablaServicios />
        <ModalServicios />
      </Grid>
    </>
  )
}
