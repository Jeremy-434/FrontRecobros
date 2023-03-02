import { Logout } from '@mui/icons-material';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, LinearProgress } from '@mui/material';
import { useCrudAplicaciones } from '../hooks';
import { useCrudServicios } from '../hooks/useCrudServicios';

export const Header = () => {

  const { isLoading: isLoadingServicios } = useCrudServicios();
  const { isLoading: isLoadingAplicaciones } = useCrudAplicaciones();

  return (
    <Box sx={{ flexGrow: 1 }} position='fixed' width='100%' zIndex={10}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon sx={{ marginRight: 2 }} /> */}
            <Box component='img' src='\logo-ecopetrol.png' width={150} />
          </IconButton>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <Typography
              variant="h1"
              component="h1"
              color="inherit"
              fontSize={24}
              fontWeight={700}
            >
              RECOBROS
            </Typography>

          </Box>
          <Typography
            variant="h3"
            component="h3"
            color="inherit"
            fontSize={16}
            fontWeight={500}
          >
            Ama Gwatterson
          </Typography>
          <Button color="inherit">
            <Logout color='error' />
          </Button>
        </Toolbar>
      </AppBar>
      { (isLoadingServicios || isLoadingAplicaciones) && <LinearProgress color="secondary" />}
    </Box>
  );
}