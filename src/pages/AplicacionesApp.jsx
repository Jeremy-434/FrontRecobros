import { Grid } from '@mui/material';
import { FiltrosAplicaciones, TablaAplicaciones } from '../components/';

export const AplicacionesApp = () => {
  return (
    <Grid
      display='flex'
      flexDirection='column'
      marginX='auto'
      width='75%'
      marginTop={'71px'}
      marginBottom={2}>
      <FiltrosAplicaciones />
      <TablaAplicaciones />
    </Grid>
  )
}
