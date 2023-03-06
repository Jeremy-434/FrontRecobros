import { Container } from '@mui/material';

const drawerWidth = 240;

const styles = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    width: { xs: '100%', sm: `calc(100% - ${drawerWidth}px) ` },
    // margin: 0,
    // height: { xs: '100%', sm: `calc(100vh - 71px) ` },
    marginLeft: { xs: '0px', sm: `${drawerWidth}px` },
    marginRight: { xs: '0px' },
    // overflowY: 'scroll',
    'max-width': '2000px'
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
