import { Grid } from '@mui/material';

export const PageLayout = ({children}) => {
    return (
        <Grid
            display='flex'
            flexDirection='column'
            marginX='auto'
            width='100%'
            marginTop={'71px'}
            marginBottom={2}
        >
            {children}
        </Grid>
    )
}
