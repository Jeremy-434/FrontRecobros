import { Container } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DrawerLeft, Header } from '../components/';
import { AplicacionesApp, ServiciosApp } from '../pages';

const drawerWidth = 240;

const styles = {
  display: 'flex',
  alignItems: 'center',
  width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px) ` },
  height: { xs: '100%', sm: `calc(100vh - 71px) ` },
  marginLeft: { xs: 0, sm: `${drawerWidth}px` },
  overflowY: 'scroll'
}

export const AppRouter = () => {
  return (
    <>

      <Header />
      <DrawerLeft />

      <Container
        sx={styles}
        // sx={{
        //   marginLeft
        // }}
      >
        <Routes>

          <Route path="servicios" element={<ServiciosApp />} />
          <Route path="aplicaciones" element={<AplicacionesApp />} />
          <Route path="/*" element={<Navigate to="servicios" />} />

        </Routes>
      </Container>
    </>
  )
}
