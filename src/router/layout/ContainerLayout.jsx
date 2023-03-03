import { Container } from '@mui/material';

const drawerWidth = 240;

const styles = {
    display: 'flex',
    alignItems: 'center',
    width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px) ` },
    // height: { xs: '100%', sm: `calc(100vh - 71px) ` },
    marginLeft: { xs: 0, sm: `${drawerWidth}px` },
    overflowY: 'scroll'
}

export const ContainerLayout = ({ children }) => {
    return (
        <Container
            sx={styles}
        >
            {children}
        </Container>
    )
}
