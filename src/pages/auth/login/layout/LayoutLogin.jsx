import { Box, Grid, Typography } from '@mui/material';

export const LayoutLogin = ({ children, title = '' }) => {
    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            zIndex={100}
            sx={{
                minHeight: '100vh',
                backgroundColor: 'primary.main',
                padding: 4,
                opacity: 1,
            }}
        >

            <Grid item
                className="box-shadow"
                xs={3}
                sx={{
                    width: { sm: 450 },
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2,
                    textAlign: 'center',
                }}
            >
                <Box component='img' src='\logo-ecopetrol.png' width={150} />
                <Typography variant="h2" fontWeight={600} sx={{ mb: 3 }} >{title}</Typography>

                {children}

            </Grid>
            <Typography variant="h6" fontSize={12} color="white" sx={{ mt: 2 }} >@ 2023 | Ecopetrol S.A.</Typography>
        </Grid>
    )
}
