import { Logout } from '@mui/icons-material';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { LoadingComponent } from './LoadingComponent';
import { useAuthStore } from '../../hooks';

export const Header = () => {

  const { startLogout, user } = useAuthStore();

  return (
    <Box sx={{ flexGrow: 1 }} position='fixed' width='100%' zIndex={10}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
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
            {user?.nombreUsuario}
          </Typography>
          <Button onClick={startLogout} color="inherit">
            <Logout color='error' />
          </Button>
        </Toolbar>
        <LoadingComponent />
      </AppBar>
    </Box>
  );
}