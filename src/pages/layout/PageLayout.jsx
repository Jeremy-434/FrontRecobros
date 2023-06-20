import { Grid } from '@mui/material';

export const PageLayout = ({children}) => {
    return (
        <Grid
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginX="auto"
            width={{ xs: '100%', xl: '200%' }}
            marginTop="71px"
            marginBottom={2}
        >
            {children}
        </Grid>
    )
}
