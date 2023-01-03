import { Grid } from '@mui/material';
import { FiltrosServicios } from '../components';
import { TablaServicios } from '../components/table/TablaServicios';

export const ServiciosApp = () => {
  return (
    <>
      <Grid
        display='flex'
        flexDirection='column'
        marginX='auto'
        width='75%'
        marginTop={'180px'}
        marginBottom={2}>
        <FiltrosServicios />
        <TablaServicios />
      </Grid>
    </>
  )
}
